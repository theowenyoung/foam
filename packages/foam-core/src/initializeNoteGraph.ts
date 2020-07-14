
import glob from 'glob';
import { promisify } from 'util';
import fs from 'fs';
import os from 'os';
import detectNewline from 'detect-newline';
import { NoteGraph } from './note-graph';
import { createNoteFromMarkdown } from './markdown-provider';

const findAllFiles = promisify(glob);

export const initializeNoteGraph = async (aboluteDir: string) => {
  // remove trailing slash from aboluteDir if exists
  if (aboluteDir.substr(-1) == '/') aboluteDir = aboluteDir.slice(0, -1);

  const files = await findAllFiles(`${aboluteDir}/**/*.md`, {});

  const graph = new NoteGraph();
  await Promise.all(
    (await files).map(f => {
      return fs.promises.readFile(f).then(data => {
        const markdown = (data || '').toString();
        const eol = detectNewline(markdown) || os.EOL;
        graph.setNote(createNoteFromMarkdown(f, markdown, eol));
      });
    })
  );

  return graph;
}

import { fileURLToPath } from 'url';
import { basename, extname } from 'path';

export function getFileName(meta) {
  const fullPath = fileURLToPath(meta.url);
  return basename(fullPath, extname(fullPath));
}

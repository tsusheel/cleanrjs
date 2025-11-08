import { resolve as pathResolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = pathResolve(__dirname, '..');

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('~/')) {
    const resolvedPath = pathResolve(projectRoot, specifier.slice(2));
    const resolvedUrl = pathToFileURL(resolvedPath).href;
    return nextResolve(resolvedUrl, context);
  }

  return nextResolve(specifier, context);
}

import {mkdtempSync, writeFileSync} from 'fs';
import {tmpdir} from 'os';
import {join} from 'path';
import type {Node} from 'constructs';

export function getEmptyZip(dir: string): void {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    writeFileSync(join(dir, 'empty.zip'), new Uint8Array(Buffer.from([80, 75, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])));
}

export function getFolderWithEmptyZip(node: Node): string {
    const placeholderDir = mkdtempSync(join(tmpdir(), node.id));
    getEmptyZip(placeholderDir);
    return placeholderDir;
}

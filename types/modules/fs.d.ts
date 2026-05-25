declare module "fs" {
  interface FileHandle {
    read(length?: number | string): string | null;
    write(data: string): number;
    close(): boolean;
    flush(): boolean;
    fileno(): number;
    seek(offset?: number, whence?: number): boolean;
    tell(): number;
    error(): string | null;
    eof(): boolean;
  }

  interface DirHandle {
    read(): string | null;
    tell(): number;
    seek(offset: number): boolean;
    close(): boolean;
    error(): string | null;
  }

  interface StatResult {
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    atime: number;
    mtime: number;
    ctime: number;
    type: "file" | "directory" | "link" | "char" | "block" | "fifo" | "socket";
  }

  export function open(path: string, flags?: string, mode?: number): FileHandle | null;
  export function readfile(path: string, length?: number): string | null;
  export function writefile(path: string, data: string, mode?: number): number | null;
  export function readlink(path: string): string | null;
  export function stat(path: string): StatResult | null;
  export function lstat(path: string): StatResult | null;
  export function mkdir(path: string, mode?: number): boolean;
  export function rmdir(path: string): boolean;
  export function symlink(target: string, path: string): boolean;
  export function unlink(path: string): boolean;
  export function rename(oldpath: string, newpath: string): boolean;
  export function chmod(path: string, mode: number): boolean;
  export function chown(path: string, uid: number, gid: number): boolean;
  export function glob(pattern: string): string[] | null;
  export function dirname(path: string): string;
  export function basename(path: string): string;
  export function realpath(path: string): string | null;
  export function opendir(path: string): DirHandle | null;
  export function lsdir(path: string, pattern?: string): string[] | null;
  export function popen(command: string, mode?: string): FileHandle | null;
  export function access(path: string, mode?: number): boolean;
  export function mkstemp(template?: string): FileHandle | null;

  export const stdin: FileHandle;
  export const stdout: FileHandle;
  export const stderr: FileHandle;

  export function error(): string | null;
}

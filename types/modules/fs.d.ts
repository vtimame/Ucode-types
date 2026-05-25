declare module "fs" {
  interface FileHandle {
    /** Read data from the file. Pass a number for byte count, or `"line"`/`"all"` for line/full read. */
    read(length?: number | string): string | null;
    /** Write data to the file. Returns the number of bytes written. */
    write(data: string): number;
    /** Close the file handle. */
    close(): boolean;
    /** Flush buffered data to the underlying file. */
    flush(): boolean;
    /** Return the file descriptor number. */
    fileno(): number;
    /** Set the file position. Position: `0` = SEEK_SET, `1` = SEEK_CUR, `2` = SEEK_END. */
    seek(offset?: number, position?: number): boolean;
    /** Return the current file position. */
    tell(): number;
    /** Truncate the file at the given offset (default: current position). */
    truncate(offset?: number): boolean;
    /** Apply or test a file lock. Operations: `"sh"` (shared), `"ex"` (exclusive), `"un"` (unlock). */
    lock(operation?: string): boolean;
    /** Test whether the file descriptor refers to a terminal. */
    isatty(): boolean;
    /** Query the last file error. */
    error(): string | null;
    /** Test whether end-of-file has been reached. */
    eof(): boolean;
    /** Perform an ioctl operation on the file descriptor. */
    ioctl(direction: number, type: number, num: number, value?: any): any;
  }

  interface ProcHandle {
    /** Read data from the process output. */
    read(length?: number | string): string | null;
    /** Write data to the process input. */
    write(data: string): number;
    /** Close the process handle and wait for termination. Returns the exit code. */
    close(): number;
    /** Flush buffered data. */
    flush(): boolean;
    /** Return the file descriptor number. */
    fileno(): number;
  }

  interface DirHandle {
    /** Read the next directory entry name. Returns `null` at end of directory. */
    read(): string | null;
    /** Return the current read position in the directory. */
    tell(): number;
    /** Seek to a specific position in the directory. */
    seek(offset: number): boolean;
    /** Close the directory handle. */
    close(): boolean;
    /** Return the file descriptor number. */
    fileno(): number;
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

  interface StatVfsResult {
    bsize: number;
    frsize: number;
    blocks: number;
    bfree: number;
    bavail: number;
    files: number;
    ffree: number;
    favail: number;
    fsid: number;
    flag: number;
    namemax: number;
  }

  /** Open a file. Mode: `"r"`, `"w"`, `"a"`, `"r+"`, `"w+"`, `"a+"`. */
  export function open(path: string, mode?: string, perm?: number): FileHandle | null;
  /** Associate an existing file descriptor number with a file handle. */
  export function fdopen(fd: number, mode?: string): FileHandle | null;
  /** Duplicate a file descriptor. */
  export function dup2(oldfd: number, newfd: number): true | null;
  /** Read the entire contents of a file. Optionally limit the number of bytes. */
  export function readfile(path: string, limit?: number): string | null;
  /** Write data to a file. Returns the number of bytes written. */
  export function writefile(path: string, data: string, limit?: number): number | null;
  /** Read the target of a symbolic link. */
  export function readlink(path: string): string | null;
  /** Get file status information (follows symlinks). */
  export function stat(path: string): StatResult | null;
  /** Get file status information (does not follow symlinks). */
  export function lstat(path: string): StatResult | null;
  /** Query filesystem statistics for the given path. */
  export function statvfs(path: string): StatVfsResult | null;
  /** Create a directory. */
  export function mkdir(path: string): true | null;
  /** Remove an empty directory. */
  export function rmdir(path: string): true | null;
  /** Create a symbolic link pointing to `target` at `path`. */
  export function symlink(target: string, path: string): true | null;
  /** Remove a file or symbolic link. */
  export function unlink(path: string): true | null;
  /** Get the current working directory. */
  export function getcwd(): string | null;
  /** Change the current working directory. */
  export function chdir(path: string): true | null;
  /** Change file permissions. */
  export function chmod(path: string, mode: number): true | null;
  /** Change file owner and/or group. */
  export function chown(path: string, uid?: number, gid?: number): true | null;
  /** Rename or move a file. */
  export function rename(oldpath: string, newpath: string): true | null;
  /** Resolve glob patterns. Returns an array of matched paths. */
  export function glob(...patterns: string[]): string[] | null;
  /** Return the directory component of a path. */
  export function dirname(path: string): string | null;
  /** Return the filename component of a path. */
  export function basename(path: string): string | null;
  /** Resolve the absolute canonical path, resolving symlinks. */
  export function realpath(path: string): string | null;
  /** Open a directory for reading. */
  export function opendir(path: string): DirHandle | null;
  /** List directory contents. Returns a sorted array of entry names. */
  export function lsdir(path: string, pattern?: string): string[] | null;
  /** Start a process and return a handle. Mode: `"r"` (read stdout) or `"w"` (write stdin). */
  export function popen(command: string, mode?: string): ProcHandle | null;
  /** Create a temporary file from a template. */
  export function mkstemp(template?: string): FileHandle | null;
  /** Create a unique temporary directory from a template. Returns the path. */
  export function mkdtemp(template?: string): string | null;
  /** Check file accessibility. Mode: `"r"`, `"w"`, `"x"`, `"f"` or combination. */
  export function access(path: string, mode?: string): boolean | null;
  /** Create a pipe. Returns `[read_handle, write_handle]`. */
  export function pipe(): [FileHandle, FileHandle] | null;
  /** Query the last filesystem error description. */
  export function error(): string | null;

  export const stdin: FileHandle;
  export const stdout: FileHandle;
  export const stderr: FileHandle;
}

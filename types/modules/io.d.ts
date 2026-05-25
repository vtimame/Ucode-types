declare module "io" {
  interface IOHandle {
    /** Read data from the handle. */
    read(length?: number | string): string | null;
    /** Write data. Returns bytes written. */
    write(data: string): number;
    /** Close the handle. */
    close(): boolean;
    /** Flush buffered data. */
    flush(): boolean;
    /** Return the file descriptor number. */
    fileno(): number;
    /** Set the file position. */
    seek(offset?: number, whence?: number): boolean;
    /** Return the current file position. */
    tell(): number;
    /** Query the last error. */
    error(): string | null;
    /** Test whether end-of-file has been reached. */
    eof(): boolean;
    /** Apply or test a file lock. */
    lock(operation: string): boolean;
    /** Truncate the file at the given length. */
    truncate(length?: number): boolean;
    /** Perform a file control operation. */
    fcntl(cmd: number, arg?: any): any;
    /** Perform a device control operation. */
    ioctl(cmd: number, arg?: any): any;
    /** Test whether the handle refers to a terminal. */
    isatty(): boolean;
  }

  /** Open a file or device. */
  export function open(path: string, flags?: string, mode?: number): IOHandle | null;
  /** Create a pipe. Returns `[read_handle, write_handle]`. */
  export function pipe(): [IOHandle, IOHandle] | null;
  /** Wrap a numeric file descriptor as an IO handle. */
  function _new(fd: number): IOHandle | null;
  export { _new as new };
  /** Convert a compatible value to an IO handle. */
  export function from(value: any): IOHandle | null;
  /** Query the last IO error description. */
  export function error(): string | null;

  export const SEEK_SET: number;
  export const SEEK_CUR: number;
  export const SEEK_END: number;
}

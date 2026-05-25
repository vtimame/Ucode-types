declare module "io" {
  interface IOHandle {
    read(length?: number | string): string | null;
    write(data: string): number;
    close(): boolean;
    flush(): boolean;
    fileno(): number;
    seek(offset?: number, whence?: number): boolean;
    tell(): number;
    error(): string | null;
    eof(): boolean;
    lock(operation: string): boolean;
    truncate(length?: number): boolean;
    fcntl(cmd: number, arg?: any): any;
    ioctl(cmd: number, arg?: any): any;
    isatty(): boolean;
  }

  export function open(path: string, flags?: string, mode?: number): IOHandle | null;
  export function pipe(): [IOHandle, IOHandle] | null;
  function _new(fd: number): IOHandle | null;
  export { _new as new };
  export function from(value: any): IOHandle | null;
  export function error(): string | null;

  export const SEEK_SET: number;
  export const SEEK_CUR: number;
  export const SEEK_END: number;
}

declare module "zlib" {
  interface DeflateStream {
    write(data: string, flush?: boolean): string;
    finish(): string;
  }

  interface InflateStream {
    write(data: string): string;
    finish(): string;
  }

  export function deflate(data: string, level?: number, gzip?: boolean): string | null;
  export function inflate(data: string): string | null;
  export function deflater(level?: number, gzip?: boolean): DeflateStream;
  export function inflater(): InflateStream;

  export const Z_NO_COMPRESSION: number;
  export const Z_BEST_SPEED: number;
  export const Z_BEST_COMPRESSION: number;
  export const Z_DEFAULT_COMPRESSION: number;
  export const Z_NO_FLUSH: number;
  export const Z_SYNC_FLUSH: number;
  export const Z_FULL_FLUSH: number;
  export const Z_FINISH: number;
}

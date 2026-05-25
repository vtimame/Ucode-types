declare module "zlib" {
  interface DeflateStream {
    /** Write data to the deflate stream. Set `flush` to true to flush pending output. */
    write(data: string, flush?: boolean): string;
    /** Read compressed output from the stream. */
    read(): string;
    /** Query the last compression error. */
    error(): string | null;
  }

  interface InflateStream {
    /** Write compressed data to the inflate stream. */
    write(data: string, flush?: boolean): string;
    /** Read decompressed output from the stream. */
    read(): string;
    /** Query the last decompression error. */
    error(): string | null;
  }

  /** Compress data in one shot. Set `gzip` to true for gzip format. */
  export function deflate(data: string, gzip?: boolean, level?: number): string | null;
  /** Decompress data in one shot. Handles both deflate and gzip formats. */
  export function inflate(data: string): string | null;
  /** Create a streaming deflate compressor. */
  export function deflater(gzip?: boolean, level?: number): DeflateStream | null;
  /** Create a streaming inflate decompressor. */
  export function inflater(): InflateStream | null;

  export const Z_NO_COMPRESSION: number;
  export const Z_BEST_SPEED: number;
  export const Z_BEST_COMPRESSION: number;
  export const Z_DEFAULT_COMPRESSION: number;
  export const Z_NO_FLUSH: number;
  export const Z_SYNC_FLUSH: number;
  export const Z_FULL_FLUSH: number;
  export const Z_FINISH: number;
}

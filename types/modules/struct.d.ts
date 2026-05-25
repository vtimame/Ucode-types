declare module "struct" {
  interface StructInstance {
    /** Pack values according to the precompiled format. Returns a byte string. */
    pack(...values: any[]): string;
    /** Unpack a byte string according to the precompiled format. */
    unpack(input: string, offset?: number): any[];
  }

  interface StructBuffer {
    /** Get or set the current read/write position. */
    pos(position?: number): number;
    /** Get or set the buffer length. */
    length(length?: number): number;
    /** Reset the position to the start. */
    start(): StructBuffer;
    /** Set the position to the end. */
    end(): StructBuffer;
    /** Pack and append values according to the format string. */
    put(format: string, ...values: any[]): StructBuffer;
    /** Unpack values at the current position. Advances the position. */
    get(format: string): any[];
    /** Read (unpack) values at the current position. Alias for `get()`. */
    read(format: string): any[];
    /** Return a slice of the buffer as a byte string. */
    slice(start?: number, end?: number): string;
    /** Fill the buffer with a value between start and end positions. */
    set(value?: number, start?: number, end?: number): StructBuffer;
    /** Return the entire buffer content as a byte string and reset. */
    pull(): string;
  }

  /** Pack values into a byte string. Format: `b/B` (char), `h/H` (short), `i/I` (int), `l/L` (long), `q/Q` (int64), `f` (float), `d` (double), `s` (string), `x` (pad). Byte order: `<` (LE), `>` (BE), `!` (network), `=`/`@` (native). */
  export function pack(format: string, ...values: any[]): string;
  /** Unpack a byte string into an array of values according to the format. */
  export function unpack(format: string, input: string, offset?: number): any[];
  /** Precompile a format string for repeated pack/unpack operations. */
  function _new(format: string): StructInstance;
  export { _new as new };
  /** Create an incremental struct buffer for building or parsing binary data. */
  export function buffer(initialData?: string): StructBuffer;
}

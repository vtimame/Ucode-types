declare module "struct" {
  interface StructBuffer {
    write(format: string, ...values: any[]): StructBuffer;
    read(format: string): any[];
    pos(offset?: number): number;
    length(): number;
    reset(): StructBuffer;
    slice(offset?: number, length?: number): string;
  }

  interface CompiledFormat {
    pack(...values: any[]): string;
    unpack(input: string, offset?: number): any[];
    length(): number;
  }

  /** Pack values into binary string */
  export function pack(format: string, ...values: any[]): string;

  /** Unpack binary string into values */
  export function unpack(format: string, input: string, offset?: number): any[];

  /** Precompile format string */
  function _new(format: string): CompiledFormat;
  export { _new as new };

  /** Create struct buffer */
  export function buffer(initialData?: string): StructBuffer;
}

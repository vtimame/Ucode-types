declare module "debug" {
  interface SourcePos {
    filename: string;
    line: number;
    byte: number;
  }

  interface ValueInfo {
    type: string;
    value: any;
    address?: string;
    refcount?: number;
    length?: number;
    prototype?: any;
    upvalues?: any[];
  }

  interface LocalInfo {
    name: string;
    value: any;
    index: number;
  }

  /** Write a memory dump report to the given file path. */
  export function memdump(file: string): true | null;
  /** Capture a call stack trace. Returns an array of trace entries. */
  export function traceback(level?: number): any[];
  /** Get the current source file position. */
  export function sourcepos(): SourcePos | null;
  /** Get internal information about a value (type, refcount, address, etc.). */
  export function getinfo(value: any): ValueInfo | null;
  /** Get information about a local variable at the given call stack level. */
  export function getlocal(level: number | undefined, variable: string | number): LocalInfo | null;
  /** Set a local variable's value at the given call stack level. */
  export function setlocal(level: number | undefined, variable: string | number, value?: any): LocalInfo | null;
  /** Get a captured variable (upvalue) of a function. */
  export function getupval(target: Function, variable: string | number): LocalInfo | null;
  /** Set a captured variable (upvalue) of a function. */
  export function setupval(target: Function, variable: string | number, value: any): LocalInfo | null;
}

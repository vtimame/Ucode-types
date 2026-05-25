declare module "debug" {
  interface SourcePos {
    file: string;
    line: number;
    byte: number;
  }

  interface ValueInfo {
    type: string;
    value: any;
    address: string;
    refcount?: number;
    length?: number;
    prototype?: any;
    upvalues?: any[];
  }

  export function traceback(level?: number): string;
  export function memdump(): string;
  export function getinfo(level?: number): { source: string; line: number; name?: string };
  export function getlocal(level: number, index: number): { name: string; value: any } | null;
  export function setlocal(level: number, index: number, value: any): boolean;
  export function getupval(fn: Function, index: number): { name: string; value: any } | null;
  export function setupval(fn: Function, index: number, value: any): boolean;
  export function sourcepos(level?: number): SourcePos | null;
}

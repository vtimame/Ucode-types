// ucode global built-in functions

// --- Type / Value ---

declare function type(value: any): "function" | "object" | "array" | "double" | "int" | "bool" | "string" | "null" | "regexp" | "resource";
declare function length(value: any): number | null;
declare function exists(obj: object, key: string): boolean;
declare function keys(obj: object): string[];
declare function values(obj: object): any[];
declare function proto(value: any): object | null;

// --- Output ---

declare function print(...args: any[]): void;
declare function printf(format: string, ...args: any[]): void;
declare function sprintf(format: string, ...args: any[]): string;
declare function warn(message: string): void;

// --- String ---

declare function substr(str: string, offset: number, length?: number): string;
declare function split(str: string, separator?: string | RegExp, limit?: number): string[];
declare function join(separator: string, arr: any[]): string;
declare function index(haystack: string | any[], needle: any): number;
declare function rindex(haystack: string | any[], needle: any): number;
declare function ltrim(str: string, chars?: string): string;
declare function rtrim(str: string, chars?: string): string;
declare function trim(str: string, chars?: string): string;
declare function lc(str: string): string;
declare function uc(str: string): string;
declare function chr(...codes: number[]): string;
declare function ord(str: string, offset?: number): number;
declare function replace(str: string, pattern: string | RegExp, replacement: string | ((...args: any[]) => string)): string;
declare function match(str: string, pattern: string | RegExp): RegExpMatchArray | null;
declare function regexp(pattern: string, flags?: string): RegExp;

// --- Array ---

declare function push(arr: any[], ...values: any[]): any;
declare function pop(arr: any[]): any;
declare function shift(arr: any[]): any;
declare function unshift(arr: any[], ...values: any[]): any;
declare function splice(arr: any[], offset: number, length?: number, ...items: any[]): any[];
declare function slice(arr: any[] | string, offset?: number, end?: number): any[] | string;
declare function sort(arr: any[], compareFn?: (a: any, b: any) => number): any[];
declare function reverse(arr: any[]): any[];
declare function filter(arr: any[], fn: (value: any, index: number, arr: any[]) => any): any[];
declare function map(arr: any[], fn: (value: any, index: number, arr: any[]) => any): any[];
declare function reduce(arr: any[], fn: (acc: any, value: any, index: number, arr: any[]) => any, initial?: any): any;

// --- Number / Conversion ---

declare function hex(value: string | number): number;
declare function int(value: any, base?: number): number;
declare function abs(value: number): number;
declare function max(...values: number[]): number;
declare function min(...values: number[]): number;

// --- Encoding ---

declare function b64enc(data: string): string;
declare function b64dec(data: string): string;
declare function hexenc(data: string): string;
declare function hexdec(data: string): string;

// --- IP ---

declare function iptoarr(addr: string): number[];
declare function arrtoip(arr: number[]): string;

// --- JSON ---

declare function json(data: string): any;
declare function json(data: any, indent?: number): string;

// --- Control ---

declare function exit(code?: number): never;
declare function die(message: string): never;
declare function assert(condition: any, message?: string): void;

// --- System ---

declare function system(command: string | string[], timeout?: number): { stdout: string; stderr: string; exitcode: number } | string;
declare function popen(command: string, mode?: string): UcodeFileHandle;
declare function getenv(name?: string): string | Record<string, string>;
declare function setenv(name: string, value: string): void;
declare function unsetenv(name: string): void;
declare function signal(signum: number, callback?: (() => void) | null): void;

// --- Time ---

declare function time(): number;
declare function clock(): number[];

interface UcodeTimeSpec {
  sec: number;
  min: number;
  hour: number;
  mday: number;
  mon: number;
  year: number;
  wday: number;
  yday: number;
  isdst: number;
}

declare function localtime(timestamp?: number): UcodeTimeSpec;
declare function gmtime(timestamp?: number): UcodeTimeSpec;
declare function timelocal(spec: UcodeTimeSpec): number;
declare function timegm(spec: UcodeTimeSpec): number;
declare function mktime(spec: UcodeTimeSpec): number;

// --- Sleep ---

declare function sleep(milliseconds: number): void;

// --- Dynamic code ---

declare function loadstring(code: string, name?: string): ((...args: any[]) => any) | null;
declare function loadfile(path: string, name?: string): ((...args: any[]) => any) | null;
declare function call(fn: Function, ctx?: any, scope?: object, args?: any[]): any;
declare function bind(fn: Function, ctx: any, ...args: any[]): Function;

// --- Module ---

declare function require(module: string): any;
declare function module(name: string, init?: Function): void;
declare function sourcepath(depth?: number): string;

// --- Template ---

declare function include(path: string, scope?: object): any;
declare function render(source: string, scope?: object): string;

// --- Glob ---

declare function wildcard(pattern: string, str?: string): boolean | string[];

// --- File handle (returned by popen, etc.) ---

interface UcodeFileHandle {
  read(length?: number | string): string | null;
  write(data: string): number;
  close(): number;
  fileno(): number;
  flush(): boolean;
  error(): string | null;
  eof(): boolean;
  tell(): number;
  seek(offset?: number, whence?: number): boolean;
}

// --- Global constants ---

declare const REQUIRE_SEARCH_PATH: string[];

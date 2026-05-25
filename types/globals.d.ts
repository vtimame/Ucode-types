/** Query the type of a value. */
declare function type(value: any): "function" | "object" | "array" | "double" | "int" | "bool" | "string" | "null" | "regexp" | "resource";

/** Return the length of a string, array, or object. Returns `null` for other types. */
declare function length(value: any): number | null;

/** Check whether the given key exists in the object. */
declare function exists(obj: object, key: string): boolean;

/** Return an array of the object's own property names. */
declare function keys(obj: object): string[];

/** Return an array of the object's own property values. */
declare function values(obj: object): any[];

/** Get or set the prototype of a value. Returns the prototype when called with one argument, or the value itself when setting. */
declare function proto(value: any, proto?: object | null): object | null;

/** Print values to stdout. Returns the number of bytes written. */
declare function print(...args: any[]): number;

/** Formatted print to stdout. Supports `%J` for JSON serialization. Returns the number of bytes written. */
declare function printf(format: string, ...args: any[]): number;

/** Format a string using printf-style format specifiers. Supports `%J` for JSON serialization. */
declare function sprintf(format: string, ...args: any[]): string;

/** Print values to stderr. Returns the number of bytes written. */
declare function warn(...args: any[]): number;

/** Extract a substring starting at `offset` with optional `length`. */
declare function substr(str: string, offset: number, length?: number): string;

/** Split a string by separator with optional limit on the number of results. */
declare function split(str: string, separator: string | RegExp, limit?: number): string[];

/** Join array elements into a string with the given separator. */
declare function join(separator: string, arr: any[]): string | null;

/** Find the first occurrence of `needle` in `haystack`. Returns the position or -1 if not found. */
declare function index(haystack: string | any[], needle: any): number;

/** Find the last occurrence of `needle` in `haystack`. Returns the position or -1 if not found. */
declare function rindex(haystack: string | any[], needle: any): number;

/** Remove leading characters (whitespace by default, or specified `chars`). */
declare function ltrim(str: string, chars?: string): string;

/** Remove trailing characters (whitespace by default, or specified `chars`). */
declare function rtrim(str: string, chars?: string): string;

/** Remove leading and trailing characters (whitespace by default, or specified `chars`). */
declare function trim(str: string, chars?: string): string;

/** Convert string to lowercase. */
declare function lc(str: string): string;

/** Convert string to uppercase. */
declare function uc(str: string): string;

/** Convert numeric values to a byte string. */
declare function chr(...codes: number[]): string;

/** Convert numeric values to a UTF-8 string. */
declare function uchr(...codes: number[]): string;

/** Get the byte value at the given position in a string. */
declare function ord(str: string, offset?: number): number;

/** Replace occurrences of `pattern` in a string. Supports regex patterns and callback replacements. */
declare function replace(str: string, pattern: string | RegExp, replacement: string | ((...args: any[]) => string), limit?: number): string;

/** Match a string against a regex pattern. Returns match array or `null`. */
declare function match(str: string, pattern: string | RegExp): RegExpMatchArray | null;

/** Compile a regular expression from source string and optional flags. */
declare function regexp(pattern: string, flags?: string): RegExp;

/** Glob-match a subject string against a wildcard pattern. */
declare function wildcard(subject: string, pattern: string, nocase?: boolean): boolean;

/** Push one or more values onto the end of an array. Returns the last pushed value. */
declare function push(arr: any[], ...values: any[]): any;

/** Remove and return the last element of an array. */
declare function pop(arr: any[]): any;

/** Remove and return the first element of an array. */
declare function shift(arr: any[]): any;

/** Add one or more values to the beginning of an array. Returns the last added value. */
declare function unshift(arr: any[], ...values: any[]): any;

/** Remove and/or replace elements in an array. Returns the modified array. */
declare function splice(arr: any[], offset: number, length?: number, ...items: any[]): any[];

/** Return a shallow copy of a portion of an array or string. */
declare function slice(arr: any[] | string, start?: number, end?: number): any[] | string;

/** Sort an array in-place with an optional comparator function. Returns the sorted array. */
declare function sort(arr: any[], compareFn?: (a: any, b: any) => number): any[];

/** Reverse an array or string. Returns the reversed value. */
declare function reverse(arr: any[] | string): any[] | string;

/** Return a new array with elements for which the callback returns a truthy value. */
declare function filter(arr: any[], fn: (value: any, index: number, arr: any[]) => any): any[];

/** Return a new array with each element transformed by the callback. */
declare function map(arr: any[], fn: (value: any, index: number, arr: any[]) => any): any[];

/** Reduce an array to a single value by applying the callback cumulatively. */
declare function reduce(arr: any[], fn: (acc: any, value: any, index: number, arr: any[]) => any, initial?: any): any;

/** Return a new array with duplicate values removed. */
declare function uniq(arr: any[]): any[] | null;

/** Parse a hexadecimal string to a number. Returns `NaN` if invalid. */
declare function hex(value: string | number): number;

/** Convert a value to an integer with optional base. Returns `NaN` if conversion fails. */
declare function int(value: any, base?: number): number;

/** Return the absolute value of a number. */
declare function abs(value: number): number;

/** Return the largest of the given values. */
declare function max(...values: number[]): number;

/** Return the smallest of the given values. */
declare function min(...values: number[]): number;

/** Base64-encode a string. */
declare function b64enc(data: string): string | null;

/** Base64-decode a string. */
declare function b64dec(data: string): string | null;

/** Hex-encode a byte string. */
declare function hexenc(data: string): string;

/** Hex-decode a string. Optionally skip specified characters (e.g. colons, dashes). */
declare function hexdec(data: string, skipchars?: string): string | null;

/** Convert an IP address string to a byte array (4 elements for IPv4, 16 for IPv6). */
declare function iptoarr(addr: string): number[] | null;

/** Convert a byte array to an IP address string. */
declare function arrtoip(arr: number[]): string | null;

/** Parse a JSON string or resource into a value. */
declare function json(data: string): any;

/** Terminate the interpreter with the given exit code. */
declare function exit(code?: number): never;

/** Raise an exception with the given message and abort execution. */
declare function die(message: string): never;

/** Assert that a condition is truthy, or throw an exception with the optional message. */
declare function assert(condition: any, message?: string): void;

/** Execute an external command and wait for completion. Returns the exit code. */
declare function system(command: string | string[], timeout?: number): number;

/** Get environment variable value, or all variables as an object when called without arguments. */
declare function getenv(name?: string): string | Record<string, string>;

/** Set or query a signal handler. Returns the previous handler or `null`. */
declare function signal(signum: number | string, callback?: (() => void) | null): Function | null;

/** Return the current UNIX epoch timestamp. */
declare function time(): number;

/** Return the system clock as `[seconds, nanoseconds]`. Pass `true` for monotonic clock. */
declare function clock(monotonic?: boolean): number[] | null;

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

/** Convert a UNIX timestamp to broken-down local time. Defaults to current time. */
declare function localtime(timestamp?: number): UcodeTimeSpec;

/** Convert a UNIX timestamp to broken-down UTC time. Defaults to current time. */
declare function gmtime(timestamp?: number): UcodeTimeSpec;

/** Convert a broken-down local time specification to a UNIX timestamp. */
declare function timelocal(spec: UcodeTimeSpec): number | null;

/** Convert a broken-down UTC time specification to a UNIX timestamp. */
declare function timegm(spec: UcodeTimeSpec): number | null;

/** Pause execution for the specified number of milliseconds. */
declare function sleep(milliseconds: number): boolean;

/** Compile a code string and return the resulting entry function. */
declare function loadstring(code: string, options?: object): ((...args: any[]) => any) | null;

/** Compile a file and return the resulting entry function. */
declare function loadfile(path: string, options?: object): ((...args: any[]) => any) | null;

/** Call a function with a modified context and scope. */
declare function call(fn: Function, ctx?: any, scope?: object, ...args: any[]): any;

/** Load a module by dotted name. Searches `REQUIRE_SEARCH_PATH`. */
declare function require(name: string): any;

/** Include and evaluate an external ucode file with an optional scope. */
declare function include(path: string, scope?: object): any;

/** Render a template path or function to a string, capturing its output. */
declare function render(source: string | Function, scope_or_arg?: any, ...args: any[]): string;

/** Return the file path of the current source file. Pass `true` for directory only. */
declare function sourcepath(depth?: number, dironly?: boolean): string | null;

/** Enable or disable VM opcode tracing. */
declare function trace(level: number): void;

/** Control the garbage collector. */
declare function gc(operation?: string, argument?: any): boolean | number;

declare const REQUIRE_SEARCH_PATH: string[];

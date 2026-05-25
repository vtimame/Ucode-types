declare module "math" {
  /** Return the absolute value. Returns `NaN` for non-numeric input. */
  export function abs(x: number): number;
  /** Return the arc tangent of `y/x` in radians, using signs to determine the quadrant. */
  export function atan2(y: number, x: number): number;
  /** Return the cosine of `x` (in radians). */
  export function cos(x: number): number;
  /** Return `e` raised to the power `x`. */
  export function exp(x: number): number;
  /** Return the natural logarithm of `x`. */
  export function log(x: number): number;
  /** Return the base-10 logarithm of `x`. */
  export function log10(x: number): number;
  /** Return the base-2 logarithm of `x`. */
  export function log2(x: number): number;
  /** Return the sine of `x` (in radians). */
  export function sin(x: number): number;
  /** Return the square root of `x`. */
  export function sqrt(x: number): number;
  /** Return the tangent of `x` (in radians). */
  export function tan(x: number): number;
  /** Return the arc sine of `x` in radians. */
  export function asin(x: number): number;
  /** Return the arc cosine of `x` in radians. */
  export function acos(x: number): number;
  /** Return the arc tangent of `x` in radians. */
  export function atan(x: number): number;
  /** Return `x` raised to the power `y`. */
  export function pow(x: number, y: number): number;
  /** Return the smallest integer >= `x`. */
  export function ceil(x: number): number;
  /** Return the largest integer <= `x`. */
  export function floor(x: number): number;
  /** Return the nearest integer to `x`. */
  export function round(x: number): number;
  /** Pseudo-random number. No args: `[0,1)`. One arg: `[0,a)`. Two args: `[a,b)`. */
  export function rand(a?: number, b?: number): number;
  /** Seed the pseudo-random number generator. */
  export function srand(seed: number): void;
  /** Test whether a value is `NaN`. */
  export function isnan(x: any): boolean;
  /** Test whether a value is positive or negative infinity. */
  export function isinf(x: any): boolean;
  /** Test whether a value is a finite number. */
  export function isfinite(x: any): boolean;
  /** Convert degrees to radians. */
  export function deg2rad(degrees: number): number;
  /** Convert radians to degrees. */
  export function rad2deg(radians: number): number;
}

declare module "math" {
  export function abs(x: number): number;
  export function atan2(y: number, x: number): number;
  export function cos(x: number): number;
  export function exp(x: number): number;
  export function log(x: number): number;
  export function log10(x: number): number;
  export function log2(x: number): number;
  export function sin(x: number): number;
  export function sqrt(x: number): number;
  export function tan(x: number): number;
  export function asin(x: number): number;
  export function acos(x: number): number;
  export function atan(x: number): number;
  export function pow(x: number, y: number): number;
  export function ceil(x: number): number;
  export function floor(x: number): number;
  export function round(x: number): number;
  export function rand(a?: number, b?: number): number;
  export function srand(seed: number): void;
  export function isnan(x: any): boolean;
  export function isinf(x: any): boolean;
  export function isfinite(x: any): boolean;
  export function deg2rad(degrees: number): number;
  export function rad2deg(radians: number): number;
}

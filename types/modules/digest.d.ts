declare module "digest" {
  export function fnv1a64(data: string): string;
  export function md5(data: string): string;
  export function sha1(data: string): string;
  export function sha256(data: string): string;
  export function sha384(data: string): string;
  export function sha512(data: string): string;

  export function md5_file(path: string): string | null;
  export function sha1_file(path: string): string | null;
  export function sha256_file(path: string): string | null;
  export function sha384_file(path: string): string | null;
  export function sha512_file(path: string): string | null;
}

declare module "digest" {
  /** Compute the FNV-1a 64-bit hash. Returns hex-encoded string. */
  export function fnv1a64(data: string): string;
  /** Compute the MD5 hash. Returns hex-encoded string. */
  export function md5(data: string): string;
  /** Compute the SHA-1 hash. Returns hex-encoded string. */
  export function sha1(data: string): string;
  /** Compute the SHA-256 hash. Returns hex-encoded string. */
  export function sha256(data: string): string;
  /** Compute the SHA-384 hash. Returns hex-encoded string. */
  export function sha384(data: string): string;
  /** Compute the SHA-512 hash. Returns hex-encoded string. */
  export function sha512(data: string): string;

  /** Compute the FNV-1a 64-bit hash of a file. */
  export function fnv1a64_file(path: string): string | null;
  /** Compute the MD5 hash of a file. */
  export function md5_file(path: string): string | null;
  /** Compute the SHA-1 hash of a file. */
  export function sha1_file(path: string): string | null;
  /** Compute the SHA-256 hash of a file. */
  export function sha256_file(path: string): string | null;
  /** Compute the SHA-384 hash of a file. */
  export function sha384_file(path: string): string | null;
  /** Compute the SHA-512 hash of a file. */
  export function sha512_file(path: string): string | null;
}

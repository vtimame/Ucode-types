declare module "resolv" {
  interface DNSRecord {
    name: string;
    type: string;
    ttl: number;
    rdata: string | object;
  }

  interface DNSResponse {
    header: {
      id: number;
      qr: boolean;
      opcode: number;
      aa: boolean;
      tc: boolean;
      rd: boolean;
      ra: boolean;
      rcode: number;
    };
    question: Array<{ name: string; type: string; class: string }>;
    answer: DNSRecord[];
    authority: DNSRecord[];
    additional: DNSRecord[];
  }

  interface QueryOptions {
    type?: string | number;
    nameservers?: string[];
    timeout?: number;
    retries?: number;
  }

  export function query(domain: string | string[], options?: QueryOptions): DNSResponse | DNSResponse[] | null;
  export function error(): string | null;

  export const RR_A: number;
  export const RR_AAAA: number;
  export const RR_CNAME: number;
  export const RR_MX: number;
  export const RR_NS: number;
  export const RR_PTR: number;
  export const RR_SOA: number;
  export const RR_SRV: number;
  export const RR_TXT: number;
  export const RR_ANY: number;
}

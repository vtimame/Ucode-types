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
    /** Record type: `"A"`, `"AAAA"`, `"CNAME"`, `"MX"`, `"NS"`, `"PTR"`, `"SOA"`, `"SRV"`, `"TXT"`, `"ANY"`. */
    type?: string | number;
    /** Nameserver address(es) to query. */
    nameserver?: string | string[];
    /** Query timeout in milliseconds. */
    timeout?: number;
    /** Number of retry attempts. */
    retries?: number;
    /** Maximum EDNS payload size. */
    edns_maxsize?: number;
    /** Return TXT records as arrays of strings. */
    txt_as_array?: boolean;
  }

  /** Perform DNS queries. Pass a single domain or array of domains. */
  export function query(domain: string | string[], options?: QueryOptions): DNSResponse | DNSResponse[] | null;
  /** Query the last DNS resolver error description. */
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

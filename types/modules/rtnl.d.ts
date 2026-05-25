declare module "rtnl" {
  interface RTNLListener {
    close(): void;
  }

  export function request(cmd: number, flags: number, payload?: object): any;
  export function listener(callback: (msg: any) => void, groups?: number[]): RTNLListener | null;
  export function error(): string | null;

  // Message types
  export const RTM_NEWLINK: number;
  export const RTM_DELLINK: number;
  export const RTM_GETLINK: number;
  export const RTM_SETLINK: number;
  export const RTM_NEWADDR: number;
  export const RTM_DELADDR: number;
  export const RTM_GETADDR: number;
  export const RTM_NEWROUTE: number;
  export const RTM_DELROUTE: number;
  export const RTM_GETROUTE: number;
  export const RTM_NEWNEIGH: number;
  export const RTM_DELNEIGH: number;
  export const RTM_GETNEIGH: number;
  export const RTM_NEWRULE: number;
  export const RTM_DELRULE: number;
  export const RTM_GETRULE: number;

  // Netlink flags
  export const NLM_F_REQUEST: number;
  export const NLM_F_MULTI: number;
  export const NLM_F_ACK: number;
  export const NLM_F_ECHO: number;
  export const NLM_F_DUMP: number;
  export const NLM_F_ROOT: number;
  export const NLM_F_MATCH: number;
  export const NLM_F_ATOMIC: number;
  export const NLM_F_REPLACE: number;
  export const NLM_F_EXCL: number;
  export const NLM_F_CREATE: number;
  export const NLM_F_APPEND: number;

  // Address families
  export const AF_UNSPEC: number;
  export const AF_INET: number;
  export const AF_INET6: number;

  // Route types
  export const RTN_UNSPEC: number;
  export const RTN_UNICAST: number;
  export const RTN_LOCAL: number;
  export const RTN_BROADCAST: number;
  export const RTN_ANYCAST: number;
  export const RTN_MULTICAST: number;
  export const RTN_BLACKHOLE: number;
  export const RTN_UNREACHABLE: number;
  export const RTN_PROHIBIT: number;
  export const RTN_THROW: number;

  // Route protocols
  export const RTPROT_UNSPEC: number;
  export const RTPROT_REDIRECT: number;
  export const RTPROT_KERNEL: number;
  export const RTPROT_BOOT: number;
  export const RTPROT_STATIC: number;

  // Route scopes
  export const RT_SCOPE_UNIVERSE: number;
  export const RT_SCOPE_SITE: number;
  export const RT_SCOPE_LINK: number;
  export const RT_SCOPE_HOST: number;
  export const RT_SCOPE_NOWHERE: number;

  // Route tables
  export const RT_TABLE_UNSPEC: number;
  export const RT_TABLE_DEFAULT: number;
  export const RT_TABLE_MAIN: number;
  export const RT_TABLE_LOCAL: number;

  // Interface flags
  export const IFF_UP: number;
  export const IFF_BROADCAST: number;
  export const IFF_LOOPBACK: number;
  export const IFF_POINTOPOINT: number;
  export const IFF_RUNNING: number;
  export const IFF_NOARP: number;
  export const IFF_PROMISC: number;
  export const IFF_MULTICAST: number;
}

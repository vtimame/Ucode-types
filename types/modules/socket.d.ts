declare module "socket" {
  interface SockAddr {
    family: number;
    address?: string;
    port?: number;
    path?: string;
    flowinfo?: number;
    scope_id?: number;
  }

  interface AddrInfo {
    family: number;
    socktype: number;
    protocol: number;
    canonname?: string;
    addr: SockAddr;
  }

  interface SocketHandle {
    fileno(): number;
    connect(address: SockAddr): boolean;
    bind(address: SockAddr): boolean;
    listen(backlog?: number): boolean;
    accept(): SocketHandle | null;
    send(data: string, flags?: number): number;
    sendto(data: string, address: SockAddr, flags?: number): number;
    recv(length: number, flags?: number): string | null;
    recvfrom(length: number, flags?: number): { data: string; address: SockAddr } | null;
    shutdown(how?: number): boolean;
    close(): boolean;
    setsockopt(level: number, option: number, value: any): boolean;
    getsockopt(level: number, option: number): any;
    getpeername(): SockAddr | null;
    getsockname(): SockAddr | null;
    setblocking(blocking: boolean): boolean;
    error(): string | null;
  }

  export function create(domain: number, type: number, protocol?: number): SocketHandle | null;
  export function pair(type: number): [SocketHandle, SocketHandle] | null;
  export function open(fd: number): SocketHandle | null;
  export function connect(host: string, service: string | number, hints?: Partial<AddrInfo>, timeout?: number): SocketHandle | null;
  export function listen(host: string, service: string | number, hints?: Partial<AddrInfo>, backlog?: number, reuseaddr?: boolean): SocketHandle | null;
  export function addrinfo(hostname: string, service?: string | number, hints?: Partial<AddrInfo>): AddrInfo[] | null;
  export function nameinfo(address: SockAddr, flags?: number): { host: string; service: string } | null;
  export function sockaddr(address: any): SockAddr | null;
  export function poll(timeout: number, ...sockets: Array<[SocketHandle, number]>): number;
  export function error(numeric?: boolean): string | number | null;
  export function strerror(code: number): string;

  export const AF_UNSPEC: number;
  export const AF_UNIX: number;
  export const AF_INET: number;
  export const AF_INET6: number;
  export const AF_PACKET: number;

  export const SOCK_STREAM: number;
  export const SOCK_DGRAM: number;
  export const SOCK_RAW: number;
  export const SOCK_SEQPACKET: number;

  export const IPPROTO_IP: number;
  export const IPPROTO_TCP: number;
  export const IPPROTO_UDP: number;
  export const IPPROTO_ICMP: number;
  export const IPPROTO_ICMPV6: number;

  export const SOL_SOCKET: number;
  export const SO_REUSEADDR: number;
  export const SO_REUSEPORT: number;
  export const SO_KEEPALIVE: number;
  export const SO_BROADCAST: number;
  export const SO_SNDBUF: number;
  export const SO_RCVBUF: number;
  export const SO_SNDTIMEO: number;
  export const SO_RCVTIMEO: number;
  export const SO_ERROR: number;
  export const SO_TYPE: number;

  export const TCP_NODELAY: number;

  export const MSG_PEEK: number;
  export const MSG_WAITALL: number;
  export const MSG_DONTWAIT: number;
  export const MSG_OOB: number;

  export const SHUT_RD: number;
  export const SHUT_WR: number;
  export const SHUT_RDWR: number;

  export const NI_NUMERICHOST: number;
  export const NI_NUMERICSERV: number;
  export const NI_NOFQDN: number;
  export const NI_NAMEREQD: number;
  export const NI_DGRAM: number;

  export const AI_PASSIVE: number;
  export const AI_CANONNAME: number;
  export const AI_NUMERICHOST: number;
  export const AI_NUMERICSERV: number;
}

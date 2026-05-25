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
    /** Return the underlying file descriptor number. */
    fileno(): number;
    /** Connect to a remote address. */
    connect(address: SockAddr): true | null;
    /** Bind the socket to a local address. */
    bind(address: SockAddr): true | null;
    /** Start listening for incoming connections. */
    listen(backlog?: number): true | null;
    /** Accept an incoming connection. Returns a new socket handle. */
    accept(): SocketHandle | null;
    /** Send data. Optionally specify flags and/or destination address. Returns bytes sent. */
    send(data: string, flags?: number, address?: SockAddr): number | null;
    /** Receive data from the socket. */
    recv(length?: number, flags?: number, address?: SockAddr): string | null;
    /** Shut down part of a socket connection. */
    shutdown(how?: number): true | null;
    /** Close the socket. */
    close(): true | null;
    /** Set a socket option. */
    setopt(level: number, option: number, value: any): true | null;
    /** Get a socket option value. */
    getopt(level: number, option: number): any;
    /** Get the remote address of a connected socket. */
    peername(): SockAddr | null;
    /** Get the local address of the socket. */
    sockname(): SockAddr | null;
    /** Query the last socket error. */
    error(): string | null;
  }

  /** Create a new socket. Defaults to `AF_INET`, `SOCK_STREAM`. */
  export function create(domain?: number, type?: number, protocol?: number): SocketHandle | null;
  /** Create a connected pair of sockets. */
  export function pair(type?: number): [SocketHandle, SocketHandle] | null;
  /** Wrap an existing file descriptor as a socket handle. */
  export function open(fd: number): SocketHandle | null;
  /** High-level connect: resolve host/service, then connect. */
  export function connect(host: string, service?: string | number, hints?: Partial<AddrInfo>, timeout?: number): SocketHandle;
  /** High-level listen: resolve host/service, bind and listen. */
  export function listen(host: string, service?: string | number, hints?: Partial<AddrInfo>, backlog?: number, reuseaddr?: boolean): SocketHandle;
  /** Parse an address into a SocketAddress object. */
  export function sockaddr(address: any): SockAddr | null;
  /** Reverse DNS lookup. Returns `{hostname, service}`. */
  export function nameinfo(address: SockAddr, flags?: number): { hostname: string; service: string } | null;
  /** DNS/service resolution. Returns array of address info objects. */
  export function addrinfo(hostname: string, service?: string | number, hints?: Partial<AddrInfo>): AddrInfo[] | null;
  /** Poll multiple sockets for events. Returns event results. */
  export function poll(timeout: number, ...sockets: Array<[SocketHandle, number]>): any[] | null;
  /** Query the last socket error. Pass `true` for numeric code. */
  export function error(numeric?: boolean): string | number | null;
  /** Get the error description for a numeric error code. */
  export function strerror(code: number): string | null;

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

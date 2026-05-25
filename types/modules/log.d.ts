declare module "log" {
  /** Open a connection to the system logger. */
  export function openlog(ident?: string, options?: number, facility?: number | string): boolean;
  /** Log a message to the system logger with printf-style formatting. */
  export function syslog(priority: number, format: string, ...args: any[]): boolean;
  /** Close the system logger connection. */
  export function closelog(): void;

  /** Configure the OpenWrt ulog logging mechanism. */
  export function ulog_open(channel?: number, facility?: number, ident?: string): boolean;
  /** Log a message via the OpenWrt ulog mechanism. */
  export function ulog(priority: number, format: string, ...args: any[]): boolean;
  /** Close the ulog logger. */
  export function ulog_close(): void;
  /** Set or query the ulog priority threshold. Messages below this are suppressed. */
  export function ulog_threshold(priority?: number): boolean;

  /** Convenience: log at LOG_ERR level via ulog. */
  export function ERR(format: string, ...args: any[]): void;
  /** Convenience: log at LOG_WARNING level via ulog. */
  export function WARN(format: string, ...args: any[]): void;
  /** Convenience: log at LOG_NOTICE level via ulog. */
  export function NOTE(format: string, ...args: any[]): void;
  /** Convenience: log at LOG_INFO level via ulog. */
  export function INFO(format: string, ...args: any[]): void;
  /** Convenience: log at LOG_DEBUG level via ulog. */
  export function DBG(format: string, ...args: any[]): void;

  export const LOG_EMERG: number;
  export const LOG_ALERT: number;
  export const LOG_CRIT: number;
  export const LOG_ERR: number;
  export const LOG_WARNING: number;
  export const LOG_NOTICE: number;
  export const LOG_INFO: number;
  export const LOG_DEBUG: number;

  export const LOG_KERN: number;
  export const LOG_USER: number;
  export const LOG_MAIL: number;
  export const LOG_DAEMON: number;
  export const LOG_AUTH: number;
  export const LOG_SYSLOG: number;
  export const LOG_LPR: number;
  export const LOG_NEWS: number;
  export const LOG_UUCP: number;
  export const LOG_CRON: number;
  export const LOG_LOCAL0: number;
  export const LOG_LOCAL1: number;
  export const LOG_LOCAL2: number;
  export const LOG_LOCAL3: number;
  export const LOG_LOCAL4: number;
  export const LOG_LOCAL5: number;
  export const LOG_LOCAL6: number;
  export const LOG_LOCAL7: number;

  export const LOG_PID: number;
  export const LOG_CONS: number;
  export const LOG_NDELAY: number;
  export const LOG_ODELAY: number;
  export const LOG_NOWAIT: number;

  export const ULOG_KMSG: number;
  export const ULOG_SYSLOG: number;
  export const ULOG_STDIO: number;
}

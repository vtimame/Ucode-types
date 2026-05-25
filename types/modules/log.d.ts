declare module "log" {
  export function syslog(priority: number, format: string, ...args: any[]): void;
  export function openlog(ident: string, option: number, facility: number): void;
  export function closelog(): void;

  export function ulog(priority: number, format: string, ...args: any[]): void;
  export function ulog_open(channels: number, facility: number, ident: string): void;
  export function ulog_close(): void;
  export function ulog_threshold(priority: number): void;

  export function ERR(format: string, ...args: any[]): void;
  export function WARN(format: string, ...args: any[]): void;
  export function NOTE(format: string, ...args: any[]): void;
  export function INFO(format: string, ...args: any[]): void;
  export function DBG(format: string, ...args: any[]): void;

  // syslog priorities
  export const LOG_EMERG: number;
  export const LOG_ALERT: number;
  export const LOG_CRIT: number;
  export const LOG_ERR: number;
  export const LOG_WARNING: number;
  export const LOG_NOTICE: number;
  export const LOG_INFO: number;
  export const LOG_DEBUG: number;

  // syslog facilities
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

  // syslog options
  export const LOG_PID: number;
  export const LOG_CONS: number;
  export const LOG_NDELAY: number;
  export const LOG_ODELAY: number;
  export const LOG_NOWAIT: number;

  // ulog channels
  export const ULOG_KMSG: number;
  export const ULOG_SYSLOG: number;
  export const ULOG_STDIO: number;
}

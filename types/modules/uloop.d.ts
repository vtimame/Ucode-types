declare module "uloop" {
  interface UloopTimer {
    set(timeout: number): void;
    remaining(): number;
    cancel(): void;
  }

  interface UloopHandle {
    fileno(): number;
    handle(flags: number): void;
    close(): void;
  }

  interface UloopProcess {
    pid(): number;
    delete(): void;
  }

  interface UloopTask {
    pid(): number;
    finished(): boolean;
    kill(signal?: number): boolean;
  }

  export function init(): boolean;
  export function run(timeout?: number): void;
  export function end(): void;
  export function done(): boolean;
  export function cancelling(): boolean;

  export function timer(timeout: number, callback: () => void): UloopTimer;
  export function interval(timeout: number, callback: () => void): UloopTimer;

  export function handle(fd: number, callback: (flags: number) => void, flags?: number): UloopHandle;

  export function process(command: string, args: string[], env: Record<string, string>, callback: (exitcode: number) => void): UloopProcess;

  export function task(callback: (pipe: { send: (data: any) => void }) => any, outputCallback?: (data: any) => void): UloopTask;

  export function signal(name: string, callback: () => void): { delete(): void };

  export const ULOOP_READ: number;
  export const ULOOP_WRITE: number;
  export const ULOOP_EDGE_TRIGGER: number;
  export const ULOOP_BLOCKING: number;
}

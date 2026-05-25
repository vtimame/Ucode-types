declare module "uloop" {
  interface UloopTimer {
    /** Set or reset the timer timeout in milliseconds. */
    set(timeout?: number): void;
    /** Return the remaining time in milliseconds until the timer fires. */
    remaining(): number;
    /** Cancel the timer. */
    cancel(): void;
  }

  interface UloopInterval {
    /** Set or reset the interval period in milliseconds. */
    set(interval?: number): void;
    /** Return the remaining time until the next tick. */
    remaining(): number;
    /** Return the number of times the interval has expired. */
    expirations(): number;
    /** Cancel the interval. */
    cancel(): void;
  }

  interface UloopHandle {
    /** Return the file descriptor number being monitored. */
    fileno(): number;
    /** Update the monitored event flags. */
    handle(flags: number): void;
    /** Remove this handle from the event loop. */
    delete(): void;
  }

  interface UloopProcess {
    /** Return the process ID. */
    pid(): number;
    /** Remove this process from the event loop. */
    delete(): void;
  }

  interface UloopTask {
    /** Return the task's process ID. */
    pid(): number;
    /** Check if the task has finished. */
    finished(): boolean;
    /** Send a signal to the task process. */
    kill(signal?: number): boolean;
  }

  interface UloopPipe {
    /** Send a message to the other end of the pipe. */
    send(msg: any): void;
    /** Receive a message from the other end. */
    receive(): any;
    /** Check if the pipe has pending outgoing data. */
    sending(): boolean;
    /** Check if the pipe has pending incoming data. */
    receiving(): boolean;
  }

  interface UloopSignal {
    /** Return the signal number being handled. */
    signo(): number;
    /** Remove this signal handler. */
    delete(): void;
  }

  /** Initialize the uloop event loop. Must be called before any other uloop function. */
  export function init(): true | null;
  /** Run the event loop. Optionally specify a timeout in ms (-1 = indefinite). Returns signal number or 0. */
  export function run(timeout?: number): number | null;
  /** Check if the event loop is shutting down due to a signal. */
  export function cancelling(): boolean;
  /** Check if the event loop is currently running. */
  export function running(): boolean;
  /** Halt the event loop. Pending callbacks may still execute. */
  export function end(): void;
  /** Stop the event loop and cancel all pending operations. */
  export function done(): void;

  /** Create a one-shot timer. Fires the callback after `timeout` milliseconds. */
  export function timer(timeout: number, callback: () => void): UloopTimer | null;
  /** Create a repeating interval timer. */
  export function interval(timeout: number, callback: () => void): UloopInterval | null;

  /** Monitor a file descriptor for events. Callback receives triggered event flags. */
  export function handle(fd: number | { fileno(): number }, callback: (flags: number) => void, events: number): UloopHandle | null;

  /** Execute an external program. Callback receives the exit code on termination. */
  export function process(executable: string, args?: string[], env?: Record<string, string>, callback?: (exitcode: number) => void): UloopProcess | null;

  /** Create a background task. The task function receives a pipe for IPC. */
  export function task(taskFn: (pipe: UloopPipe) => any, outputCb?: (data: any) => void, inputCb?: (data: any) => any): UloopTask | null;

  /** Register a signal handler. */
  export function signal(signal: string | number, callback: () => void): UloopSignal | null;

  /** Query the last uloop error description. */
  export function error(): string | null;

  export const ULOOP_READ: number;
  export const ULOOP_WRITE: number;
  export const ULOOP_EDGE_TRIGGER: number;
  export const ULOOP_BLOCKING: number;
}

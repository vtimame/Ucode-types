declare module "ubus" {
  interface UbusSubscriber {
    remove(): void;
  }

  interface UbusObject {
    remove(): void;
    notify(type: string, data?: object, timeout?: number): void;
    subscribed: boolean;
  }

  interface UbusConnection {
    call(object: string, method: string, data?: object, timeout?: number): any;
    list(path?: string): Record<string, Record<string, object>> | null;
    defer(object: string, method: string, data: object, callback: (result: any) => void, timeout?: number): object;
    subscribe(object: string, callbacks?: {
      notify?: (type: string, data: any) => void;
      remove?: () => void;
    }): UbusSubscriber | null;
    publish(namespace: string, procedures: Record<string, {
      call: (request: { args: any; reply: (data?: any) => void; error: (code: number, message?: string) => void; info: { object: string; method: string; acl: object } }) => void;
      args?: object;
    }>): UbusObject | null;
    remove(obj: UbusObject): void;
    send(type: string, data?: object): void;
    disconnect(): void;
    error(): string | null;
  }

  export function connect(socket_path?: string, timeout?: number): UbusConnection | null;
  export function error(): string | null;
}

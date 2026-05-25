declare module "ubus" {
  interface UbusRequest {
    /** Send a reply to a deferred method call. */
    reply(data?: object, rcode?: number): true | null;
    /** Defer completion of a method call, allowing to reply later. */
    defer(): true | null;
    /** Get the caller's passed file descriptor. Returns fd number or -1. */
    get_fd(): number;
    /** Set a file descriptor to send along with the reply. */
    set_fd(fd: number): true | null;
    /** Finish the method call with an error status. */
    error(rcode?: number): true | null;
    /** Create a new channel from the method call context. */
    new_channel(cb: (msg: any) => void, disconnect_cb?: () => void, timeout?: number): UbusChannel | null;
  }

  interface UbusDeferred {
    /** Check if the deferred request has completed. */
    completed(): boolean;
    /** Wait synchronously for the deferred request to complete. */
    await(): boolean;
    /** Abort the pending deferred request. */
    abort(): boolean;
  }

  interface UbusObject {
    /** Send a notification from this published object. */
    notify(type: string, data?: object, data_cb?: Function, status_cb?: Function, cb?: Function, timeout?: number): any;
    /** Remove this object from the ubus bus. */
    remove(): true | null;
    /** Check whether this object has active subscribers. */
    subscribed(): boolean;
  }

  interface UbusListener {
    /** Remove this event listener from the bus. */
    remove(): true | null;
  }

  interface UbusSubscriber {
    /** Subscribe to notifications from the given ubus object. */
    subscribe(object_name: string): true | null;
    /** Unsubscribe from the given ubus object. */
    unsubscribe(object_name: string): true | null;
    /** Remove this subscriber from the bus. */
    remove(): true | null;
  }

  interface UbusChannel {
    /** Send a synchronous request on this channel. */
    request(method: string, data?: object, ret?: string, fd?: number, fd_cb?: Function): any;
    /** Send an asynchronous request on this channel. */
    defer(method: string, data?: object, cb?: Function, data_cb?: Function, fd?: number, fd_cb?: Function): UbusDeferred | null;
  }

  interface UbusConnection {
    /** List available ubus objects and their method signatures. */
    list(object_name?: string): any[] | Record<string, Record<string, object>> | null;
    /** Invoke a ubus method synchronously. Returns response data or `null` on error. */
    call(object: string, method: string, data?: object, ret?: string, fd?: number, fd_cb?: Function): any;
    /** Invoke a ubus method asynchronously. Returns a deferred request resource. */
    defer(object: string, method: string, data?: object, cb?: Function, data_cb?: Function, fd?: number, fd_cb?: Function): UbusDeferred | null;
    /** Publish a ubus object with the given methods on the bus. */
    publish(object_name: string, methods?: Record<string, { call: (req: UbusRequest) => void; args?: object }>, subscribe_cb?: Function): UbusObject | null;
    /** Register an event listener for the given pattern. */
    listener(pattern: string, cb: (type: string, data: any) => void): UbusListener | null;
    /** Send a ubus event. */
    event(event_type: string, event_data?: object): true | null;
    /** Register a ubus subscriber for object notifications. */
    subscriber(notify_cb: (type: string, data: any) => void, remove_cb?: () => void, ...patterns: string[]): UbusSubscriber | null;
    /** Disconnect from the ubus bus. */
    disconnect(): true;
    /** Query the last error information. */
    error(): string | null;
  }

  /** Establish a connection to the ubus message bus. */
  export function connect(socket_path?: string, timeout?: number): UbusConnection | null;
  /** Query the last ubus error description. Returns a string or numeric code. */
  export function error(numeric?: boolean): string | number | null;
  /** Get or set the ubus exception handler. */
  export function guard(handler?: Function): Function | true;
  /** Connect to a ubus channel from a file descriptor. */
  export function open_channel(fd: number, cb: (msg: any) => void, disconnect_cb?: () => void, timeout?: number): UbusChannel | null;
}

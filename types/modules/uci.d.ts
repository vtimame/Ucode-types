declare module "uci" {
  interface UciChanges {
    [config: string]: Array<[string, string, string?, string?]>;
  }

  interface UciCursor {
    load(config: string): boolean;
    unload(config: string): boolean;
    get(config: string, section: string, option?: string): string | string[] | null;
    get_all(config: string, section?: string): Record<string, any> | null;
    get_first(config: string, type: string, option?: string): string | string[] | null;
    foreach(config: string, type: string | null, callback: (section: Record<string, any>) => boolean | void): boolean;
    add(config: string, type: string): string;
    set(config: string, section: string, option_or_type: string, value?: string | string[]): boolean;
    rename(config: string, section: string, option_or_name: string, newname?: string): boolean;
    reorder(config: string, section: string, position: number): boolean;
    delete(config: string, section: string, option?: string): boolean;
    changes(config?: string): UciChanges;
    save(config?: string): boolean;
    revert(config?: string): boolean;
    commit(config?: string): boolean;
    error(): string | null;
  }

  export function cursor(confdir?: string, savedir?: string): UciCursor;
  export function error(): string | null;
}

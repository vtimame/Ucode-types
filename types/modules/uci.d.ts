declare module "uci" {
  interface UciCursor {
    /** Explicitly reload a configuration file into the cursor context. */
    load(config: string): true | null;
    /** Explicitly unload a configuration file from the cursor context. */
    unload(config: string): boolean | null;
    /** Query a single option value or section type. */
    get(config: string, section: string, option?: string): string | string[] | null;
    /** Query a complete section or entire configuration as a dictionary. */
    get_all(config: string, section?: string): Record<string, any> | null;
    /** Query the value or name of the first section of a given type. */
    get_first(config: string, type: string, option?: string): string | string[] | null;
    /** Iterate configuration sections of a given type, invoking the callback for each. Return `false` from callback to stop. */
    foreach(config: string, type: string | null, callback: (section: Record<string, any>) => boolean | void): boolean | null;
    /** Add a new anonymous section of the given type. Returns the auto-generated section name. */
    add(config: string, type: string): string | null;
    /** Set an option value or add a named section. */
    set(config: string, section: string, option_or_type: string, value?: string | string[]): true | null;
    /** Delete a section or option. */
    delete(config: string, section: string, option?: string): true | null;
    /** Append an item to a list option. */
    list_append(config: string, section: string, option: string, value: string): true | null;
    /** Remove an item from a list option. */
    list_remove(config: string, section: string, option: string, value: string): true | null;
    /** Rename an option or section. */
    rename(config: string, section: string, option_or_name: string, name?: string): true | null;
    /** Reorder a section to a new position. */
    reorder(config: string, section: string, index: number): true | null;
    /** Save accumulated changes to the delta directory. */
    save(config?: string): true | null;
    /** Commit accumulated changes to the actual configuration files. */
    commit(config?: string): true | null;
    /** Revert pending changes and remove delta records. */
    revert(config?: string): true | null;
    /** Enumerate pending changes for one or all loaded configurations. */
    changes(config?: string): Record<string, Array<any[]>> | null;
    /** Enumerate existing configuration file names. */
    configs(): string[] | null;
    /** Query the last error information. */
    error(): string | null;
  }

  /** Instantiate a UCI cursor for reading and modifying OpenWrt configuration files. */
  export function cursor(confdir?: string, savedir?: string, confdir2?: string, parser_flags?: number): UciCursor;
  /** Query the last UCI error description. */
  export function error(): string | null;
}

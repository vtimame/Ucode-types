declare module "nl80211" {
  interface NL80211Listener {
    close(): void;
  }

  export function request(cmd: number, flags: number, payload?: object): any;
  export function waitfor(events: object, timeout?: number): any;
  export function listener(callback: (msg: any) => void, commands?: number[], groups?: string[]): NL80211Listener | null;
  export function error(): string | null;

  // Commands (partial list of common ones)
  export const NL80211_CMD_GET_WIPHY: number;
  export const NL80211_CMD_SET_WIPHY: number;
  export const NL80211_CMD_NEW_WIPHY: number;
  export const NL80211_CMD_DEL_WIPHY: number;
  export const NL80211_CMD_GET_INTERFACE: number;
  export const NL80211_CMD_SET_INTERFACE: number;
  export const NL80211_CMD_NEW_INTERFACE: number;
  export const NL80211_CMD_DEL_INTERFACE: number;
  export const NL80211_CMD_GET_KEY: number;
  export const NL80211_CMD_SET_KEY: number;
  export const NL80211_CMD_NEW_KEY: number;
  export const NL80211_CMD_DEL_KEY: number;
  export const NL80211_CMD_GET_BEACON: number;
  export const NL80211_CMD_SET_BEACON: number;
  export const NL80211_CMD_START_AP: number;
  export const NL80211_CMD_STOP_AP: number;
  export const NL80211_CMD_GET_STATION: number;
  export const NL80211_CMD_SET_STATION: number;
  export const NL80211_CMD_NEW_STATION: number;
  export const NL80211_CMD_DEL_STATION: number;
  export const NL80211_CMD_GET_SCAN: number;
  export const NL80211_CMD_TRIGGER_SCAN: number;
  export const NL80211_CMD_NEW_SCAN_RESULTS: number;
  export const NL80211_CMD_SCAN_ABORTED: number;
  export const NL80211_CMD_GET_SURVEY: number;
  export const NL80211_CMD_SET_CHANNEL: number;
  export const NL80211_CMD_CONNECT: number;
  export const NL80211_CMD_DISCONNECT: number;
  export const NL80211_CMD_AUTHENTICATE: number;
  export const NL80211_CMD_ASSOCIATE: number;
  export const NL80211_CMD_DEAUTHENTICATE: number;
  export const NL80211_CMD_DISASSOCIATE: number;

  // Interface types
  export const NL80211_IFTYPE_UNSPECIFIED: number;
  export const NL80211_IFTYPE_ADHOC: number;
  export const NL80211_IFTYPE_STATION: number;
  export const NL80211_IFTYPE_AP: number;
  export const NL80211_IFTYPE_AP_VLAN: number;
  export const NL80211_IFTYPE_WDS: number;
  export const NL80211_IFTYPE_MONITOR: number;
  export const NL80211_IFTYPE_MESH_POINT: number;
  export const NL80211_IFTYPE_P2P_CLIENT: number;
  export const NL80211_IFTYPE_P2P_GO: number;
  export const NL80211_IFTYPE_P2P_DEVICE: number;

  export const NLM_F_REQUEST: number;
  export const NLM_F_MULTI: number;
  export const NLM_F_ACK: number;
  export const NLM_F_ECHO: number;
  export const NLM_F_DUMP: number;
  export const NLM_F_ROOT: number;
  export const NLM_F_MATCH: number;
  export const NLM_F_ATOMIC: number;
  export const NLM_F_REPLACE: number;
  export const NLM_F_EXCL: number;
  export const NLM_F_CREATE: number;
  export const NLM_F_APPEND: number;
}

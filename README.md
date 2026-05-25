# @vtima.me/ucode-types

[![npm](https://img.shields.io/npm/v/@vtima.me/ucode-types)](https://www.npmjs.com/package/@vtima.me/ucode-types)
[![license](https://img.shields.io/npm/l/@vtima.me/ucode-types)](./LICENSE)

TypeScript declarations for [ucode](https://ucode.mein.io/) — the scripting language used in [OpenWrt](https://openwrt.org/).

Provides IDE autocompletion, type checking, and inline documentation for ucode built-in functions and standard library modules. Documentation is sourced from the [official ucode C sources](https://github.com/jow-/ucode).

> [Русская версия](./README.ru.md)

## What's included

**Global built-in functions** — `printf`, `sprintf`, `print`, `warn`, `push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`, `sort`, `reverse`, `splice`, `slice`, `uniq`, `join`, `split`, `replace`, `match`, `regexp`, `wildcard`, `type`, `length`, `keys`, `values`, `exists`, `proto`, `substr`, `trim`, `ltrim`, `rtrim`, `lc`, `uc`, `chr`, `uchr`, `ord`, `hex`, `int`, `abs`, `min`, `max`, `b64enc`, `b64dec`, `hexenc`, `hexdec`, `json`, `iptoarr`, `arrtoip`, `system`, `signal`, `sleep`, `time`, `clock`, `localtime`, `gmtime`, `timelocal`, `timegm`, `die`, `exit`, `assert`, `getenv`, `require`, `include`, `render`, `loadstring`, `loadfile`, `call`, `sourcepath`, `trace`, `gc`.

**Standard library modules:**

| Module | Description |
|--------|-------------|
| `fs` | File system — open, read, write, stat, glob, pipes, temp files, directory ops |
| `uci` | OpenWrt configuration — cursor, get/set/foreach, commit, list append/remove |
| `ubus` | OpenWrt IPC — call, defer, publish, subscribe, events, channels |
| `uloop` | Event loop — timers, intervals, handles, processes, tasks, signals |
| `math` | Math — trig, pow, sqrt, log, floor/ceil, rand, isnan/isinf |
| `socket` | Network — TCP/UDP/Unix sockets, DNS resolution, poll |
| `struct` | Binary data — pack/unpack with format strings, streaming buffers |
| `log` | Logging — syslog + OpenWrt ulog with priority levels |
| `digest` | Hashing — md5, sha1, sha256, sha384, sha512, fnv1a64 (string + file) |
| `zlib` | Compression — deflate/inflate, streaming, gzip support |
| `io` | Low-level I/O — fd operations, pipes, fcntl, ioctl |
| `debug` | Debugging — traceback, sourcepos, local/upvalue inspection |
| `nl80211` | Wireless — nl80211 netlink requests, event listeners |
| `rtnl` | Routing — routing netlink requests, interface/route/neighbor management |
| `resolv` | DNS — query with type/nameserver/timeout options |

## Installation

```bash
npm install -D @vtima.me/ucode-types
```

## Setup

Since ucode syntax is close to JavaScript, the recommended approach is to write `.js` files and associate `.uc` files with JavaScript in your IDE.

**1. Create `src/env.d.ts`:**

```typescript
/// <reference types="@vtima.me/ucode-types" />
```

**2. Create `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ES2015",
    "moduleResolution": "node",
    "allowJs": true,
    "checkJs": false,
    "noEmit": true
  },
  "include": ["src"]
}
```

**3. Write ucode scripts as `.js` files:**

```javascript
import { readfile, stat, lsdir } from 'fs';
import { cursor } from 'uci';
import { connect } from 'ubus';

let uci = cursor();
uci.load('network');

uci.foreach('network', 'interface', (s) => {
    printf("%s: proto=%s\n", s['.name'], s.proto);
});

let conn = connect();
let info = conn.call('system', 'info');
printf("Uptime: %ds\n", info.uptime);
conn.disconnect();
```

Your IDE will now provide autocompletion, type hints, and inline documentation for all ucode functions and modules.

## Known limitations

- **`for...in` vs `for...of`** — ucode's `for (let x in arr)` iterates values (like JS `for...of`). In `.js` files use `for...of` for correct IDE type inference.
- **`length()` function** — the global `length()` function conflicts with JS `Array.length` property. Use `.length` property on arrays/strings instead.
- **Module warnings** — IDE may warn that `fs`, `uci`, etc. are not in `package.json` dependencies. These are ucode runtime modules — suppress via IDE inspection settings.
- **`delete` keyword** — ucode's global `delete(obj, key)` function conflicts with the JS `delete` operator and cannot be declared as a global function.

## License

[MIT](./LICENSE)

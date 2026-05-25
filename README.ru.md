# @vtima.me/ucode-types

[![npm](https://img.shields.io/npm/v/@vtima.me/ucode-types)](https://www.npmjs.com/package/@vtima.me/ucode-types)
[![license](https://img.shields.io/npm/l/@vtima.me/ucode-types)](./LICENSE)

TypeScript-декларации для [ucode](https://ucode.mein.io/) — скриптового языка, используемого в [OpenWrt](https://openwrt.org/).

Обеспечивает автодополнение, проверку типов и встроенную документацию для встроенных функций и стандартных модулей ucode. Документация взята из [официальных исходников ucode на C](https://github.com/jow-/ucode).

> [English version](./README.md)

## Что включено

**Глобальные встроенные функции** — `printf`, `sprintf`, `print`, `warn`, `push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`, `sort`, `reverse`, `splice`, `slice`, `uniq`, `join`, `split`, `replace`, `match`, `regexp`, `wildcard`, `type`, `length`, `keys`, `values`, `exists`, `proto`, `substr`, `trim`, `ltrim`, `rtrim`, `lc`, `uc`, `chr`, `uchr`, `ord`, `hex`, `int`, `abs`, `min`, `max`, `b64enc`, `b64dec`, `hexenc`, `hexdec`, `json`, `iptoarr`, `arrtoip`, `system`, `signal`, `sleep`, `time`, `clock`, `localtime`, `gmtime`, `timelocal`, `timegm`, `die`, `exit`, `assert`, `getenv`, `require`, `include`, `render`, `loadstring`, `loadfile`, `call`, `sourcepath`, `trace`, `gc`.

**Модули стандартной библиотеки:**

| Модуль | Описание |
|--------|----------|
| `fs` | Файловая система — open, read, write, stat, glob, pipes, временные файлы, работа с каталогами |
| `uci` | Конфигурация OpenWrt — cursor, get/set/foreach, commit, list append/remove |
| `ubus` | IPC OpenWrt — call, defer, publish, subscribe, events, channels |
| `uloop` | Цикл событий — таймеры, интервалы, handles, процессы, задачи, сигналы |
| `math` | Математика — тригонометрия, pow, sqrt, log, floor/ceil, rand, isnan/isinf |
| `socket` | Сеть — TCP/UDP/Unix-сокеты, DNS-резолвинг, poll |
| `struct` | Бинарные данные — pack/unpack с форматными строками, потоковые буферы |
| `log` | Логирование — syslog + OpenWrt ulog с уровнями приоритета |
| `digest` | Хеширование — md5, sha1, sha256, sha384, sha512, fnv1a64 (строки + файлы) |
| `zlib` | Сжатие — deflate/inflate, потоковое, поддержка gzip |
| `io` | Низкоуровневый ввод/вывод — операции с fd, pipes, fcntl, ioctl |
| `debug` | Отладка — traceback, sourcepos, инспекция локальных переменных и upvalue |
| `nl80211` | Wi-Fi — nl80211 netlink-запросы, слушатели событий |
| `rtnl` | Маршрутизация — routing netlink-запросы, управление интерфейсами/маршрутами/соседями |
| `resolv` | DNS — запросы с опциями type/nameserver/timeout |

## Установка

```bash
npm install -D @vtima.me/ucode-types
```

## Настройка

Синтаксис ucode близок к JavaScript, поэтому рекомендуется писать `.js` файлы и ассоциировать `.uc` файлы с JavaScript в IDE.

**1. Создайте `src/env.d.ts`:**

```typescript
/// <reference types="@vtima.me/ucode-types" />
```

**2. Создайте `tsconfig.json`:**

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

**3. Пишите ucode-скрипты как `.js` файлы:**

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

IDE будет подсказывать типы, автодополнение и встроенную документацию для всех функций и модулей ucode.

## Известные ограничения

- **`for...in` vs `for...of`** — в ucode `for (let x in arr)` итерирует значения (как JS `for...of`). В `.js` файлах используйте `for...of` для корректного вывода типов в IDE.
- **Функция `length()`** — глобальная функция `length()` конфликтует со свойством `Array.length` в JS. Используйте свойство `.length` для массивов и строк.
- **Предупреждения о модулях** — IDE может предупреждать, что `fs`, `uci` и др. отсутствуют в `package.json`. Это модули среды выполнения ucode — подавьте через настройки инспекций IDE.
- **Ключевое слово `delete`** — глобальная функция `delete(obj, key)` в ucode конфликтует с оператором `delete` в JS и не может быть объявлена как глобальная функция.

## Лицензия

[MIT](./LICENSE)

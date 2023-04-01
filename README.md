# stapil

A botched together steam web api library for deno

Based on the references of: https://partner.steamgames.com/doc/webapi and
https://wiki.teamfortress.com/wiki/WebAPI

## How to use:

As deno can integrate modules simply by link you just need to add the link of
this repository as a module import.

```ts
import * as stapil from "https://raw.githubusercontent.com/graefchen/stapil/main/mod.ts"
```

If you want it have this library in your file structure you find information about `deno vendor` [here](https://deno.land/manual@v1.32.2/tools/vendor).

## Currently usable and decently programmed interfaces w/ return types

They all use only GET reqeuests

- [x] IPlayerService
- [x] ISteamApps
- [x] ISteamEconomy
- [x] ISteamNews
- [x] ISteamUser
- [x] ISteamUserStats
- [x] ISteamWebAPIUtil
- [x] IStoreService

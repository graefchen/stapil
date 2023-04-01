# stapil

A botched together steam web api library for deno

Based on the references of: https://partner.steamgames.com/doc/webapi and
https://wiki.teamfortress.com/wiki/WebAPI

## How to use:

As deno can integrate modules simply by link you just need to add the link of this repository as a module import.

```typescript
import * as stapil from "<link-of-repository-here>";
```

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

import { Stapil } from "./src/Stapil.ts";

import { app, appList, apps } from "./src/api/App.ts";
import { appnews, newsitems } from "./src/api/News.ts";
import {
  badge,
  badges,
  ownedGame,
  quest,
  recentGame,
} from "./src/api/Player.ts";
import { friend, friendList, group, player } from "./src/api/User.ts";
import {
  achievementPercentages,
  achievementStats,
  game,
  gameAchievement,
  gameStats,
  playerachievement,
  playerStats,
  simplePlayerAchievement,
} from "./src/api/UserStats.ts";

export { Stapil };
export type {
  achievementPercentages,
  achievementStats,
  app,
  appList,
  appnews,
  apps,
  badge,
  badges,
  friend,
  friendList,
  game,
  gameAchievement,
  gameStats,
  group,
  newsitems,
  ownedGame,
  player,
  playerachievement,
  playerStats,
  quest,
  recentGame,
  simplePlayerAchievement,
};

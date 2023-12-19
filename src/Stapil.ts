import { App } from "./App.ts";
import { News } from "./News.ts";
import { Player } from "./Player.ts";
import { User } from "./User.ts";
import { UserStats } from "./UserStats.ts";
import { Utils } from "./Utils.ts";

export class Stapil {
  public IPlayerService: Player;
  public ISteamApps: App;
  public ISteamNews: News;
  public ISteamUser: User;
  public ISteamUserStats: UserStats;
  public ISteamWebAPIUtil: Utils;

  constructor(key: string) {
    this.IPlayerService = new Player(key);
    this.ISteamApps = new App(key);
    this.ISteamNews = new News(key);
    this.ISteamUser = new User(key);
    this.ISteamUserStats = new UserStats(key);
    this.ISteamWebAPIUtil = new Utils(key);
  }
}

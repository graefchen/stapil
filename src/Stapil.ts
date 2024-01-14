import { App } from "./api/App.ts";
import { News } from "./api/News.ts";
import { Player } from "./api/Player.ts";
import { User } from "./api/User.ts";
import { UserStats } from "./api/UserStats.ts";
import { Utils } from "./api/Util.ts";

export class Stapil {
  public Player: Player;
  public Apps: App;
  public News: News;
  public User: User;
  public UserStats: UserStats;
  public WebAPIUtil: Utils;

  constructor(key: string) {
    this.Player = new Player(key);
    this.Apps = new App(key);
    this.News = new News(key);
    this.User = new User(key);
    this.UserStats = new UserStats(key);
    this.WebAPIUtil = new Utils(key);
  }
}

import { App } from "./App.ts";
import { News } from "./News.ts";
import { Player } from "./Player.ts";
import { User } from "./User.ts";
import { UserStats } from "./UserStats.ts";
import { Utils } from "./Utils.ts";

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

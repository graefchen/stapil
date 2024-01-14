export class SteamID {
  #id: string;

  constructor(id: string) {
    if (id.length != 17) {
      throw new Error(`This SteamID: "${id}" is not a valid SteamID.`);
    } else {
      this.#id = id;
    }
  }

  public get id(): string {
    return this.#id;
  }

  toString(): string {
    return `${this.id}`;
  }
}

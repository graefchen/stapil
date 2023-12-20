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

export class Base {
  #key: string;
  #base_link: string;

  /** */
  constructor(key: string, link: string) {
    this.#key = key;
    this.#base_link = link;
  }

  protected get key(): string {
    return this.#key;
  }

  protected get link(): string {
    return this.#base_link;
  }

  /**
   * @async
   * @function request
   * @param link
   * @returns
   */
  protected async request(link: string) {
    const res = await fetch(link);
    if (res.status != 200) {
      // If it is an 401 error:
      if (res.status == 401) {
        // turn string into tokens
        const text = await res.text();
        const array = text.replaceAll("<", " ").replaceAll(">", " ").replaceAll(
          "  ",
          " ",
        ).split(" ");
        // get the position of a specific token
        const position = array.indexOf("pre") + 1;
        const parameter = array[position].replace("=", "");
        return new Error(
          `Access is denied. Please verify your '${parameter}' parameter.`,
        );
      }
      return new Error(
        `Something went wrong and the request returned with the status: "${res.status}" and statusText: "${res.statusText}".`,
      );
    }
    const data = await res.json();
    return data.response != undefined ? data.response : data;
  }
}

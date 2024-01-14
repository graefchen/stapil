export class WebApi {
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
}

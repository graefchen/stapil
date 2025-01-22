/**
 * An internel class used for better acessing of certain varibles
 * this includes {key} and {link}
 */
export class WebApi {
  #key: string;
  #base_link: string;

  /**
   * 
   * @param {string} key
   * @param {string} link
   */
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

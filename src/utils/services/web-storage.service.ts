/**
 * Utility class service to manage the web storage including:
 *
 * - `localStorage`
 * - `sessionStorage`
 *
 *
 * **WITHOUT** the need to stringify or parse
 */
export class WebStorageService {
  constructor() {}

  /**
   * Stores a key-value pair in the WebStorage
   */
  static setKey(key: string, value: any, inSession?: boolean): void {
    const strinfigiedValue: string = JSON.stringify(value);

    //If the user stored the pair inside the session storage
    if (inSession) {
      return sessionStorage.setItem(key, strinfigiedValue);
    }
    return localStorage.setItem(key, strinfigiedValue);
  }

  /**
   * Retrieves a key-value pair, if the key isn't found in the WebStorage, it returns null
   */
  static getKey(key: string, inSession?: boolean): string | null {
    let parsedItem: string | null = JSON.parse(
      //@ts-ignore
      localStorage.getItem(key) as string
    );

    //If the user stored the pair inside the session storage

    if (inSession) {
      parsedItem = JSON.parse(
        //@ts-ignore
        sessionStorage.getItem(key) as string
      );
    }

    return parsedItem;
  }

  /**
   * Deletes a settled key-value pair in either the WebStorage
   */
  static removeKey(key: string, inSession?: boolean): void {
    if (inSession) {
      return sessionStorage.removeItem(key);
    }
    return localStorage.removeItem(key);
  }
}

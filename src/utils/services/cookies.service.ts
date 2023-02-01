import { cookieType, arrayOfCookiesType } from "../types/cookie-service-types";

/**
 * Utility class that handles cookies
 *
 * INFO: Even though cookies are stored in a string, they aren't overridden using these methods
 *
 * example:
 *

 * ```js
  * document.cookie = "test = a";
  
  * document.cookie = "test2 = b";
  
  * document.cookie = "test3 = c; expires='0'";
  *
  * console.log(document.cookie) //Returns "test=a;test2=b"
 * ```
 */
export default class CookieService {
  constructor() {}
  /**
   * Creates a cookie
   */
  setCookie(name: string, value: any, cookieCanExpire?: boolean): string {
    if (cookieCanExpire) {
      //Gets the time in ms from the next week
      let todayInMilliseconds: number = new Date().getTime();
      let sevenDaysInMilliseconds: number = 1000 * 60 * 60 * 24 * 7;

      //Gets the actual date
      let nextWeekDate: Date = new Date(
        todayInMilliseconds + sevenDaysInMilliseconds
      );
      document.cookie = `${name}=${value}; expires="${nextWeekDate}"; sameSite=strict"`;
    }

    return (document.cookie = `${name}=${value}; sameSite=strict`);
  }

  /**
   * Recovers a cookie by its name
   *
   * ⚠ **WARNING**: It's case sensitive ⚠
   */
  getCookieByName(cookieNameToFind: string): cookieType | null {
    //We get all the cookies
    const cookiesArray: arrayOfCookiesType | string = this.getAllCookies(false);

    //We iterate through the array of cookies and find the cookie wanted
    for (const cookieObject of cookiesArray) {
      // @ts-ignore
      const { name, value }: string | cookieType = cookieObject;

      const cookieHasBeenFound: boolean = name === cookieNameToFind;

      if (cookieHasBeenFound) {
        //@ts-ignore
        return cookieObject;
      }
    }

    return null;
  }

  /**
   * Changes the value of a cookie by its name
   */
  patchCookieValue(nameOfCookie: string, newValue: any): void {
    document.cookie = `${nameOfCookie}=${newValue}`;
  }

  /**
   * Deletes a cookie by their name
   */
  deleteCookieByName(nameOfCookie: string): void {
    document.cookie = `${nameOfCookie}=0; expires=${new Date(0)}`;
  }

  /**
   * Gets all cookies stored in the website
   * Returns either a string or an array of objects with the cookie name and value
   */
  getAllCookies(rawCookies: boolean = false): arrayOfCookiesType | string {
    if (rawCookies) {
      return document.cookie;
    }

    let rawArrayOfCookies: string[] = document.cookie.split(";");
    const formattedArrayOfCookies: any[] = [];

    for (const cookie of rawArrayOfCookies) {
      let name: string = cookie.split("=")[0];
      let value: string = cookie.split("=")[1];

      formattedArrayOfCookies.push({ name, value });
    }

    return formattedArrayOfCookies;
  }

  /**
   * Deletes all cookies stored in the website
   */
  deleteAllCookies(): void {
    let rawArrayOfCookies: string[] = document.cookie.split(";");

    for (const cookie of rawArrayOfCookies) {
      let name: string = cookie.split("=")[0];

      document.cookie = `${name}=0; expires=${new Date(0)}`;
    }
  }
}

export default class CookieService {
  //local variables
  constructor() {}

  /*    
    INFO:Even though cookies are stored in a string, they aren't overridden when creating a new one
    
    ex: 
    document.cookie = "test = a";
    document.cookie = "test2 = b"
    document.cookie = "test3 = c; expires='0'"

    console.log(document.cookie) → "test=a;test2=b"
    */

  //Creates a cookie
  setCookie(name: string, value: any, canExpire?: boolean): string {
    if (canExpire) {
      //Gets the time in ms from the next week
      let todayInMilliseconds: number = new Date().getTime();
      let sevenDaysInMilliseconds: number = 1000 * 60 * 60 * 24 * 7;

      //Gets the actual date
      let nextWeekDate: Date = new Date(
        todayInMilliseconds + sevenDaysInMilliseconds
      );
      document.cookie = `${name}=${value}; expires="${nextWeekDate}"`;
    }

    return (document.cookie = `${name}=${value}`);
  }

  //Recovers a cookie by name
  getCookieByName(cookieNameToFind: string): {
    name: string;
    value: string;
  } | null {
    //We get all the cookies
    const cookiesArray:
      | {
          name: string;
          value: string;
        }[]
      | string = this.getAllCookies(false);

    //We iterate through the array of cookies and find the cookie wanted
    for (const cookieObject of cookiesArray) {
      //@ts-ignore
      const { name, value } = cookieObject;

      const cookieHasBeenFound = name === cookieNameToFind;

      if (cookieHasBeenFound) {
        //@ts-ignore
        return cookieObject;
      }
    }

    return null;
  }

  //Changes the value of a cookie by name
  changeCookieValue(nameOfCookie: string, newValue: any): void {
    document.cookie = `${nameOfCookie}=${newValue}`;
  }

  //Deletes a cookie by their name
  deleteCookieByName(nameOfCookie: string): void {
    document.cookie = `${nameOfCookie}=0; expires=${new Date(0)}`;
  }

  //Gets all cookies stored in the website
  //Returns either a string or an array of objects with the cookie name and value
  getAllCookies(rawCookies: boolean = false):
    | {
        name: string;
        value: string;
      }[]
    | string {
    if (rawCookies) {
      return document.cookie;
    }

    let rawArrayOfCookies = document.cookie.split(";");
    const formattedArrayOfCookies = [];

    for (const cookie of rawArrayOfCookies) {
      let name = cookie.split("=")[0];
      let value = cookie.split("=")[1];

      formattedArrayOfCookies.push({ name, value });
    }

    return formattedArrayOfCookies;
  }

  //Deletes all cookies stored in the website
  deleteAllCookies(): void {
    let rawArrayOfCookies: string[] = document.cookie.split(";");

    for (const cookie of rawArrayOfCookies) {
      let name: string = cookie.split("=")[0];

      document.cookie = `${name}=0; expires=${new Date(0)}`;
    }
  }
}

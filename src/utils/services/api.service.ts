//TanStack Query
import { useQuery } from "@tanstack/react-query";

import { useMutation } from "@tanstack/react-query";
/**
 * Service to call the API through methods
 */
export default class AppService {
  //Local variables
  urlAPI: string;

  constructor() {
    //Back-end API to fetch data
    this.urlAPI = "http://localhost:3001/user";

    //Local Next.js API to fetch data
    // this.urlAPI = "http://localhost:3000/api/";
  }
  //Need to use TanStack Query

  /**
   * Function expression that makes a `GET`request using `fetch`
   */
  private getData = async function name(url: string) {
    try {
      const response: any = await fetch(url);
      //In case there's an error with the query that the API can't send
      //Ex: When the url does not exist
      const hasError: boolean = !response.ok;

      if (hasError) {
        throw response;
      }
      const data: any = await response.json();

      return data;
    } catch (APIError) {
      console.error(`⚠ An unexpected API error has occured: ${APIError} ⚠`);
    }
  };

  /**
   * Function expression that makes a `POST` request using `fetch`
   */
  private postData = async function (
    url: string,
    dataToSend: any,
    jwt?: string
  ) {
    //We need to send text to the API so we stringify it
    const stringifiedData: string = JSON.stringify(dataToSend);

    const response: any = await fetch(url, {
      method: "POST", //To post and modify data at the same time
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: stringifiedData,
    });

    //We want to returned parsed data as a promise
    const parsedResponse: any = await response.json();

    return parsedResponse;
  };

  /**
   * Posts the user email, fullname and email to create the user
   */
  async postSignUp() {
    const url = `${this.urlAPI}/signup/`;
  }

  /**
   * Posts the user email and password to log the user in
   * ```js
   * {email: string, password: string}
   * ```
   */
  async postLogin(email: string, password: string) {
    const url = `${this.urlAPI}/login/`;
  }

  /**
   * Posts the new user first
   */
  async postProfile() {
    const url = `${this.urlAPI}/profile/`;
  }

  /**
   *
   */
  async putProfile() {
    const url = `${this.urlAPI}/profile/`;
  }
}

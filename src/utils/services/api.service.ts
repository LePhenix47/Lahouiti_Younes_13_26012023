//TanStack Query
//To make GET requests:
import { useQuery } from "@tanstack/react-query";
//To make POST requests:
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
   * Function expression that makes a `GET` request using `fetch`
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

      //We return the data
      return data;
    } catch (APIError) {
      console.error(`⚠ An unexpected API error has occured: ${APIError} ⚠`);
      //We return the error message
      return APIError;
    }
  };

  /**
   * Function expression that makes a `POST` request using `fetch`
   */
  private postData = async function (
    url: string,
    dataToSend: any,
    jsonWebToken?: string
  ) {
    //We need to send text to the API so we stringify it
    const stringifiedData: string = JSON.stringify(dataToSend);

    const response: any = await fetch(url, {
      method: "POST", //To post and modify data at the same time
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jsonWebToken}`,
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
  async postLogin(email: string, password: string, jwt: string) {
    const url = `${this.urlAPI}/login/`;

    const bodyOfRequest = { email, password };

    const response: any = useMutation({
      mutationFn: () => {
        return this.postData(url, bodyOfRequest, jwt);
      },
    });

    return response;
  }

  /**
   * Retrieves the data of the user
   */
  async postProfile(jwt: string) {
    const url = `${this.urlAPI}/profile/`;

    const response: any = useMutation({
      mutationFn: () => {
        return this.postData(url, jwt);
      },
    });

    return response;
  }

  /**
   *
   */
  async putProfile(jwt: string, newFirstName: string, newLastName: string) {
    const url = `${this.urlAPI}/profile/`;

    const bodyOfRequest = { firstName: newFirstName, lastName: newLastName };

    const response: any = useMutation({
      mutationFn: () => {
        return this.postData(url, bodyOfRequest, jwt);
      },
    });

    return response;
  }
}

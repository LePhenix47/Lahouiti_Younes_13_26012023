import { log } from "../functions/helper-functions";

/**
 * Service to call the API through methods
 */
export default class ApiService {
  //Local variables
  private BASE_URL: string;

  constructor() {
    //Back-end API to fetch data
    this.BASE_URL = "http://localhost:3001/api/v1/user";

    //Local Next.js API to fetch data
    // this.BASE_URL = "http://localhost:3000/api/";
  }
  //Need to use TanStack Query

  /**
   * Function expression that makes a `GET` request using `fetch`
   */
  private async getData(url: string) {
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
  }

  /**
   * Function expression that makes a `POST` request using `fetch`
   */
  private async postData(url: string, dataToSend: any, jsonWebToken?: string) {
    //We need to send text to the API so we stringify it
    const requestHasBody: boolean = !!dataToSend;

    console.log({ url, dataToSend, jsonWebToken });
    let stringifiedData: string;
    if (requestHasBody) {
      stringifiedData = JSON.stringify(dataToSend);
    } else {
      stringifiedData = "";
    }

    const response: any = await fetch(url, {
      method: "POST", //To post or modify data
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jsonWebToken}`,
      },
      body: stringifiedData,
    });

    //We want to returned parsed data as a promise
    const parsedResponse: any = await response.json();

    const statusIsOK: boolean = parsedResponse.status < 400;

    //We return the response as a success
    if (statusIsOK) {
      return parsedResponse;
    }

    //We return the response as a failure
    throw parsedResponse;
  }
  /**
   * Function expression that makes a `PUT` request using `fetch`
   */
  private async putData(url: string, dataToSend: any, jsonWebToken?: string) {
    //We need to send text to the API so we stringify it
    const requestHasBody: boolean = !!dataToSend;

    console.log({ url, dataToSend, jsonWebToken });
    let stringifiedData: string;
    if (requestHasBody) {
      stringifiedData = JSON.stringify(dataToSend);
    } else {
      stringifiedData = "";
    }

    const response: any = await fetch(url, {
      method: "PUT", //To post or modify data
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jsonWebToken}`,
      },
      body: stringifiedData,
    });

    //We want to returned parsed data as a promise
    const parsedResponse: any = await response.json();

    const statusIsOK: boolean = parsedResponse.status < 400;

    //We return the response as a success
    if (statusIsOK) {
      return parsedResponse;
    }

    //We return the response as a failure
    throw parsedResponse;
  }

  /**
   * Posts the user email, fullname and email to create the user
   */
  async postSignUp() {
    const url: string = `${this.BASE_URL}/signup/`;
  }

  /**
   * Posts the user email and password to log the user in
   * ```js
   * {email: string, password: string}
   * ```
   */
  async postLogin(email: string, password: string): Promise<any> {
    const url: string = `${this.BASE_URL}/login/`;

    const bodyOfRequest: {
      email: string;
      password: string;
    } = { email, password };

    const response: any = await this.postData(url, bodyOfRequest);

    return response;
  }
  /**
   * Retrieves the data of the user
   */
  async postProfile(jwt: string): Promise<any> {
    const url: string = `${this.BASE_URL}/profile/`;

    const emptyBodyRequest: object = {};

    const response: any = await this.postData(url, emptyBodyRequest, jwt);

    return response;
  }

  /**
   * Changes the first and/or last name of the user
   */
  async putProfile(
    jwt: string,
    newFirstName: string,
    newLastName: string
  ): Promise<any> {
    const url: string = `${this.BASE_URL}/profile/`;

    console.log("putProfile method", { jwt, newFirstName, newLastName });

    const bodyOfRequest: {
      firstName: string;
      lastName: string;
    } = { firstName: newFirstName, lastName: newLastName };

    const response: any = await this.putData(url, bodyOfRequest, jwt);

    return response;
  }
}

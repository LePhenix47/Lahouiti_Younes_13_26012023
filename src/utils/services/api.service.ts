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
   * Posts the user email, fullname and email to create the user
   */
  postSignUp() {
    const url = `${this.urlAPI}/signup`;
  }

  /**
   * Posts the user email and password to log the user in
   */
  postLogin() {
    const url = `${this.urlAPI}/login`;
  }

  /**
   *
   */
  postProfile() {
    const url = `${this.urlAPI}/profile`;
  }

  /**
   *
   */
  putProfile() {
    const url = `${this.urlAPI}/profile`;
  }
}

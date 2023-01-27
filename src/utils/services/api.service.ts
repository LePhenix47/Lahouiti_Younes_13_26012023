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
  postSignUp() {
    const url = `${this.urlAPI}/signup`;
  }

  postLogin() {
    const url = `${this.urlAPI}/login`;
  }

  postProfile() {
    const url = `${this.urlAPI}/profile`;
  }

  putProfile() {
    const url = `${this.urlAPI}/profile`;
  }
}

export default class AppService {
  //Local variables
  urlAPI: string;

  constructor() {
    //Back-end API to fetch data
    this.urlAPI = "http://localhost:3001";

    //Local Next.js API to fetch data
    // this.urlAPI = "http://localhost:3000/api/";
  }
}

class API {
  //   constructor() {
  //     this.URL = "https://api.hatchways.io/assessment/students";
  //   }

  async getStudent() {
    const res = await fetch("https://api.hatchways.io/assessment/students");
    const data = await res.json();
    //console.log(data);
    return data;
  }
}

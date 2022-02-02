class API {
  async getStudent() {
    const res = await fetch("https://api.hatchways.io/assessment/students");
    const data = await res.json();
    return data;
  }
}

class Request {
  static HOST = "https://www.houdunren.com";

  query(api) {
    return Request.HOST + "/" + api;
  }
}
let request = new Request();
console.log(request.query("article"));

console.log(request.HOST);

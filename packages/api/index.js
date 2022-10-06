import http from "http";
import url from "url";
import getDataFromDb from "./mysql.js";

const port = 3000;
const host = "127.0.0.1";

const requestListener = async function (req, res) {
  res.setHeader("content-type", "application/json");
  const reqUrl = url.parse(req.url, true);
  const limit = reqUrl.query._limit;
  const page = reqUrl.query._page;
  const skip = (page - 1) * limit;
  const dblimit = `${skip}, ${limit}`;

  if (reqUrl.pathname === "/data") {
    const data = await getDataFromDb(dblimit);
    res.statusCode = "200";
    res.setHeader("X-Total-Count", data.numRows);
    res.end(JSON.stringify(data.result));
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

import type { NextApiRequest, NextApiResponse } from "next";

// Try to move to use /api/tunnel/xxx for all requests
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // 设置Access-Control-Allow-Credentials,跨域请求带授权
  myHeaders.set('Access-Control-Allow-Credentials', 'true');
  myHeaders.set('Access-Control-Allow-Origin', '*');
  myHeaders.append('mode', 'cors');

  const { paths, ...query } = req.query;
  let queryStr;
  if (req.url && req.url.indexOf("?") != -1) {
    queryStr = req.url.split("?")[1];
  }
  if (!paths || !(paths instanceof Array))
    return res.status(400).json({ message: "Invalid path" });

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "'GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization",
    },
  };

  let url;
  if (queryStr) {
    url = `${process.env.GM_CMS_API_ENDPOINT}/` + paths.join("/") + "?" + queryStr;
  } else {
    url = `${process.env.GM_CMS_API_ENDPOINT}/` + paths.join("/");
  }

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";

// Try to move to use /api/tunnel/xxx for all requests
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const { paths, ...query } = req.query;
  if (!paths || !(paths instanceof Array))
    return res.status(400).json({ message: "Invalid path" });

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  let url = `${process.env.CMS_API_ENDPOINT}/` + paths.join("/");

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import bodyParser from "body-parser";
import { NextApiHandler } from "next";

// Create middleware to parse application/json
const jsonParser = bodyParser.json();

// Custom type for middleware to work with Next.js API routes
export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Middleware to parse JSON body
export const applyJsonParserMiddleware =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res, jsonParser);
    return handler(req, res);
  };
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import decodeNumericode from "./DataHelpers/decodeNumericode";

type Data = {
  message: string
}

interface NumericodeMessageRequest extends NextApiRequest {
    body: Data
}

export default function handler(
  req: NumericodeMessageRequest,
  res: NextApiResponse<Data>
) {
    if(req.method == "POST"){
        const input = req.body.message;

        try {
            res.status(200).send({message: decodeNumericode(input)});
            
        } catch (error) {
            res.status(500).send({message: (error instanceof Error) ? error.message : "UnexpectedError"});
        }

    } else {
        res.status(400).send({message: "Bad request"});
    }
}

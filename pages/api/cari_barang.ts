import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('warung');
      
      const { search } = req.query;
      const result = await db.collection('inventory').find({ $text: {$search: search } }).toArray();

      res.status(200).json({
        status: 'success',
        data: result,
      })

    } catch(err) {
      res.status(500).json({
        message: 'server error',
      })
    }
  }
}
import clientPromise from "../../lib/mongodb";

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('warung');
  
      const result = await db.collection('inventory').find({}).toArray();
      
      res.status(200).json(result);

    } catch (err) {
      res.status(500).json({
        message: 'server error',
      });
    }
  }
};
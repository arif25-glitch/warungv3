import clientPromise from "../../lib/mongodb";

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('warung');
      
      await db.collection('inventory').insertOne(req.body);

      res.status(200).json({
        status: 'success',
      })
    } catch(err) {
      console.error(err);
    }
  }
};
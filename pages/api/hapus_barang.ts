import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('warung');

      const result = await db.collection('inventory').deleteOne({ nama_barang: 'Roti' });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        'message': 'server error',
      })
    }
  }
}
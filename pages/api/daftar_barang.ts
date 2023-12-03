import clientPromise from "../../lib/mongodb";

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db('warung');

    const result = await db.collection('inventory').find({}).toArray();

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
  }
};
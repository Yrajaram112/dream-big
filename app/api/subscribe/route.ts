import { NextApiRequest, NextApiResponse } from "next";
import { client } from '@/lib/sanity';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required." });
    }
  
    try {
      await client.create({
        _type: "subscribe",
        name,
        email,
      });
  
      return res.status(200).json({ message: "Subscribed successfully" });
    } catch (error) {
      console.error("Sanity error:", error);
      return res.status(500).json({ error: "Failed to subscribe" });
    }
  }
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await client.connect();
    const db = client.db();

    switch (req.method) {
        case 'GET':
            const posts = await db.collection('posts').find({}).toArray();
            res.status(200).json(posts);
            break;
            break;
        case 'POST':
            const newPost = req.body;
            const result = await db.collection('posts').insertOne(newPost);
            res.status(201).json(result.ops[0]);
            break;
        default:
            res.status(405).json({ error: 'Unsupported HTTP method' });
    }

    await client.close();
}
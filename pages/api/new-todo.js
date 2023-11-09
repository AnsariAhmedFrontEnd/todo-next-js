import { MongoClient } from "mongodb";

const handler = async(req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://ahmed123:Ahmed123@cluster0.9apiuhn.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todosCollection = db.collection('todos');

    const result = await todosCollection.insertOne(data);

console.log(result);

    client.close();

    res.status(201).json({message: 'Task added'})

    
  }
};

export default handler;

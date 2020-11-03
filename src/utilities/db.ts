import { MongoClient, ObjectId } from "mongodb";
const config = require("../../configuration.json");

let CLIENT: MongoClient;

export async function createInstance() {
    try {
        const client = new MongoClient(config.mongodb.uri);
        await client.connect();
        CLIENT = client;
    } catch (err) {
        console.log(err);
    }
}

export async function getInstance() {
    return CLIENT.db(config.mongodb.db);
}

export function getObjectId(id: string) {
    return new ObjectId(id);
}

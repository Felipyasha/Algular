import { v4 as uuid } from "uuid";

export class Client{
    id?: string;
    name?: string;
    ssn?: string;
    birthday?: string;
    email?: string;
    deleting: boolean = false;

    static newClient(){
        const client = new Client();
        client.id = uuid();
        return client;
    }
}
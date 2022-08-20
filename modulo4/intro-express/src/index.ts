import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app = express()
interface User {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}


const users: Array<User> = [{
    id: 1,
    name: 'Raiane',
    phone: 9999999,
    email: 'raiane.ancel@hotmail.com',
    website: 'raianeancel.com.br'
},
{
    id: 2,
    name: 'Diego',
    phone: 9999999,
    email: 'diego.moe@hotmail.com',
    website: 'dsg.com.br'
}
]

interface Post {
    id: number,
    title: string,
    body: string,
    userId: number
}

const posts: Array<Post> = [
    {
        id: 1,
        title: 'teste',
        body: 'testando',
        userId: 1
    },
    {
        id: 2,
        title: 'teste',
        body: '',
        userId: 1
    }
]
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.get("/", (req, res) => {
    res.send("Hello Raiane ")
})

app.get("/users", (req, res) => {
    res.json(users);
})

app.post("/usuarios", (req, res) => {
    console.log(req.headers.chave)

    if (req.headers.chave === "password") {
        res.json(users);
    } else {
        res.send("Chave incorreta")
    }
})

app.get("/posts", (req, res) => {
    res.json(posts);
})
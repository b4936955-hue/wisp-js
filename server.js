import { server as wisp } from "./dist/wisp-server.mjs"
import express from "express"
import http from "http"

const app = express()

app.get("/", (_, res) => {
    res.send("wisp running")
})

const server = http.createServer(app)

server.on("upgrade", (req, socket, head) => {
    wisp.routeRequest(req, socket, head)
})

server.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log("running")
})

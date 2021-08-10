import express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"
import authorsRouter from "./services/authors/index.js"

const server = express()

const port = 4000

server.use(cors())
server.use(express.json()) // If I do not specify this line of code BEFORE the routes, all the requests' bodies will be UNDEFINED

// *************** ROUTES *****************

server.use("/authors", authorsRouter)

console.table(listEndpoints(server))

server.listen(port, () => {
  console.log("Server listening on port " + port)
})

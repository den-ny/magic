import db from "./db/connection.js"
import routes from "./routes/index.js"

import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/", routes)

db.on('connected', () => {
  console.clear()
  console.log("connected to mongodb")
  app.listen(port, () => {
    console.log(`on port ${port}`)
  })
})
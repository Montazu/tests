import express from "express"
import cors from "cors"
import router from "./routes"
import config from "./config/default.json" assert { type: "json" }

const { server: { port, origin } } = config
const app = express()

app.use(cors({ origin }))
app.use(express.json())
app.use(router)

app.listen(port, console.log(`Server runing on port ${port}`))

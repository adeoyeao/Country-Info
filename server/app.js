const express = require("express")
const next = require("next")

const PORT = process.env.PORT || 5000
const dev = process.env.NODE_DEV !== "production"
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
      const app = express()

      app.use(require("./routes/index.js"))
      app.get("*", (req, res) => {
            return handle(req, res)
      })
      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})

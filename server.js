const express = require('express')
const path = require('path')
const connectLivereload = require("connect-livereload");
const app = express();
const livereload = require('livereload')
const fs = require('fs');
const PORT = process.env.PORT || 5000;
if (process.env.PORT) {
  app.get("/", (req, res) => {
    res.send(fs.readFileSync("./public/index.html", "utf8"));
  })
}
else {
  const liveReloadServer = livereload.createServer()
  liveReloadServer.watch(path.join(__dirname, 'public'))

  app.use(connectLivereload());
  app.use(express.static(path.join(__dirname, 'public')))

  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
}


app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) })


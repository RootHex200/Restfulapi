

const app = require("./app.js");
const config=require("./config/config")
const PORT = config.app.port || 4000;
app.listen(PORT, (req, res) => console.log(`server is running http://localhost:${PORT}`))


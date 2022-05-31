const server = require("./lib/utils/api");

const DEFAULT_PORT = 3004;

server.listen(DEFAULT_PORT, () => console.log("API working"));
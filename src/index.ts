import app from "./app";

// start the express server
const server = app.listen(app.get("port"), () => {
});

export default server;

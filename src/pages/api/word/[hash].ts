import { Server } from "socket.io";

function getWord(req, res) {
  const methods = {
    POST() {
      console.log("*First use, starting socket.io");

      const io = new Server(res.socket.server);

      io.on("connection", (socket) => {
        socket.broadcast.emit("a user connected");

        socket.on("hash", (hash) => {
          console.log(`Someone has connected with hash: ${hash}`);
        });

        socket.on("set-word", ({ word, hash }) => {
          console.log("received word:", word);

          socket.broadcast.emit(`word-${hash}`, { word });
        });
      });
      res.end();
    },
  };

  const fn = methods[req.method];

  if (fn) fn();
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default getWord;

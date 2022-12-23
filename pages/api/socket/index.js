import { Server } from "Socket.IO";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;
  console.log("Setting up socket");
  res.end();
};

export default SocketHandler;

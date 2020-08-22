let socket = io();

socket.on("connect", () => {
  console.log("Connected to server");

  socket.emit("createMessage", {
      from : "Aadhar",
      message : "hello"
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

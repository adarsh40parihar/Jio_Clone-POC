const express = require('express')
const app = express();
const fs = require('fs');
const cors = require("cors");
app.use(cors());

app.use(express.json());

//increase the load on the RAM by using this method
app.get("/memoryIntensive", (req, res) => {
    console.log("reading stated");
    const fileContent = fs.readFileSync("1.mp");
    console.log("Reading ended");
    res.send(fileContent);
})

app.get("/streamfile", function (req, res) {
  console.log("file readStream created");
  // const fileStreamInstance = fs.createReadStream("chat-app.zip");
  const videoStreamInstance = fs.createReadStream("1.mp4");
  // request , response -> streams
  // request -> readble stream
  // response -> writable stream
  res.writeHead(200, {
    "Content-Type": "video/mp4",
  });
  videoStreamInstance.pipe(res);
});

app.get("/rangeStreaming", (req, res) => {
  // Get the range from the request header => video player 
  const range = req.headers.range;
  if (range) {
    const videoPath = "1.mp4";
    const stat = fs.statSync(videoPath); // Get the file size in bytes
    const fileSize = stat.size;

    let parts = range.replace(/bytes=/, "").split("-"); // Format is 'bytes=0-1000'
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1; //  10**6 for 1 MB
    const header = {
      "Content-Type": "video/mp4",
      "Content-Length": chunkSize,
      "Accept-Ranges": "bytes",
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    };
    //send a 206 Partial Content Status
    res.writeHead(206, header);
    //Pipe the file stream to the response
    const file = fs.createReadStream(videoPath, { start, end });
    file.pipe(res);
  } else {
    res.status(400).json({
      message: "Invalid range request",
    })
  }
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
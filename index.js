//Server file

const app = require("express")();  //Express App framework        
const server = require("http").createServer(app);

//enable cross origin requests with Cors "middleware"
const cors = require("cors");   

//Socket.io server-side instance
const io = require("socket.io")(server, {            
    cors:{
        origin: "*",    //allows access from all origins
        methods: ["GET", "POST"]
    }
});

app.use(cors());

//Declare port 5000
const PORT = process.env.PORT || 5000;

//root route
app.get("/", (req, res) => {
    res.send('server is running');
});

//back end socket code.
//Sockets are used for realtime data transmission
io.on('connection', (socket) =>{
    //call back function that provides connection socket //a call back fucntion is a function passed as an argument for another function
    
    //gives me an ID on the frontend
    socket.emit('me', socket.id);

    //disconnect sockethandler displays end call message
    socket.on('disconnect', () =>{
        socket.broadcast.emit("callended")
    });

    //call user socket handler. 
    socket.on("calluser", ({userToCall, signalData, from, name}) =>{
        io.to(userToCall).emit("calluser", {signal: signalData, from, name});
    });

    socket.on("answercall", (data) =>{
            io.to(data.to).emit("callaccepted", data.signal);
    });
});
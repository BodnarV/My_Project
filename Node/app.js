let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

var User = require('./models/UserMongo');
var Comment = require('./models/Comment');
var Items = require('./models/Items');
var chat = require('./models/chat');

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {

        var text = new chat({
            text: message,
        });

        text.save().then(() => {
            chat.find().then((items) => {
                socket.emit('new-message', items);
            })
        })

    });

})

app.get('/all',(req,res)=>{
   
    chat.find().then((result)=>{
        res.send(result);
    })
})


server.listen(port, () => {
    console.log(`started on port: ${port}`);
});


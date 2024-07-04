const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const port = process.env.PORT || 8081;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://punam:<Punam@12345>@cluster0.ebvnh3q.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, { name: req.body.name, email: req.body.email, age: req.body.age }, { new: true })
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
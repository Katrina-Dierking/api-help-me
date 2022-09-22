
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import memberRoutes from './routes/members.js'

const app = express();

app.use('/members', memberRoutes)


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
//DB/URL

const CONNECTION_URL="mongodb+srv://kalynndier:Channing04!@cluster0.8f6phve.mongodb.net/Help?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}. Connected to db!`)))
    .catch((error)=> console.log(`${error} did not connect`))



// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// app.get('/api/member', (request, response) => {
//     console.log(member)
//     if(member) {
//         response.json(member)
//     }
// })

// app.get('/api/member/:id', (request, response) => {
//     const id = request.params.id.toLocaleLowerCase()
//     console.log(id)
//     if(member[id]) {
//         response.json(member[id])
//     }
// })

// app.post('/addMember', (request, response) => {
//     console.log(request)
//     db.collection('members').insertOne({name: request.body.name})
//     .then(result => {
//         console.log('Member added')
//         response.redirect('/')
//     })
//     .catch(err => console.error(err))
// })

// app.delete('/deleteMember')

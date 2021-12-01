const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const {getTasks, createTask, deleteTask} = require('./controller.js')

app.get(`/api/tasks`, getTasks)//endpoint address, function
app.post(`/api/tasks`, createTask)
app.delete(`/api/tasks/:id`,deleteTask)
//app.put(`/api/tasks/:id`, checkTask)

app.listen(4004, () => console.log(`Server running on 4004`))
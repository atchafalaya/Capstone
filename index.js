const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const {getTasks, createTask, deleteTask, checkTask} = require('./controller.js')

app.get(`/api/tasks`, getTasks)//Gets tasks
app.post(`/api/tasks`, createTask)//Posts new tasks
app.delete(`/api/tasks/:id`,deleteTask)//Deletes selected tasks
app.put(`/api/tasks/:id`, checkTask)

app.listen(4004, () => console.log(`Server running on 4004`))
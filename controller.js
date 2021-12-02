const tasks = require('./db.json')
let taskId = 1 

module.exports = {
    //Get all tasks
    getTasks: (req, res) => {
        //console.log(tasks)
        res.status(200).send(tasks)
    },
    //Create new task
    createTask: (req, res) => {
        let {task} = req.body
        let newTask = {
            id:taskId,
            task,
            checked : false
        }
        tasks.push(newTask)
        res.status(200).send(tasks) 
        taskId++
    },
    //Delete a task
    deleteTask: (req, res) => {
        let {id} = req.params
        let index = tasks.findIndex(elem => elem.id ===+id)
        tasks.splice(index,1)
        res.status(200).send(tasks)

    },
    checkTask: (req, res) => {
        let {id} = req.params
        let index = tasks.findIndex(elem => elem.id ===+id)
        tasks[index].checked = true   
       
        res.status(200).send(tasks)
         
    }
        
}
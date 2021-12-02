const tasksContainer = document.querySelector('#tasks-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/tasks`

const tasksCallback = ({ data : tasks }) => {
   displayTaskers(tasks)
    
}
const errCallback = err => console.log(err)

const getAllTaskers = () => axios.get(baseURL).then(tasksCallback).catch(errCallback)//((res) => console.log(res)) INSIDE the tasksCallback to test

const createTask = body => axios.post(baseURL, body).then(tasksCallback).catch(errCallback)// post or get??

const deleteTask = (id) => axios.delete(`${baseURL}/${id}`).then(tasksCallback).catch(errCallback)

const checkTask = (id) => axios.put(`${baseURL}/${id}`).then(displayCrossOff).catch(errCallback)

function submitFormHandler(e) {
    e.preventDefault()

    let task = document.querySelector('#enterTask')

    let bodyObj = {
        task: task.value,
        
    }
    createTask(bodyObj) 
    task.value = ''
    
}
//creates a div for the task cards and adds tasks within
function createTaskCard(task) {
    const taskCard = document.createElement('div')
    taskCard.classList.add('tasker-card')
    
    taskCard.innerHTML = 
    `
    <p class="task" id="task">${task.task}</p> 

    <button id="deleteBtn" onclick = "deleteTask('${task.id}')">X</button>

    <button id="checkBtn" onclick = "checkTask('${task.id}')">Done</button>

    `
    tasksContainer.appendChild(taskCard)
}

//loops through the database and creates task cards for each task
function displayTaskers(arr) {
    tasksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createTaskCard(arr[i])
    }
}
function displayCrossOff() {
    let cross = document.querySelector('.task')
    cross.classList.add('checked')

}
 
getAllTaskers()//shows tasks

form.addEventListener("submit",submitFormHandler)//event listener for task submit button

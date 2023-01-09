// const tasksDOM = document.querySelector('.tasks')
// const loadingDOM = document.querySelector('.loading-text')
// const taskInputDOM = document.querySelector('.task-input')
// const formAlertDOM = document.querySelector('.form-alert')
// // Load tasks from /api/tasks
// const showTasks = async () => {
//   loadingDOM.style.visibility = 'visible'
//   try {
//     const {
//       data: { tasks },
//     } = await axios.get('/api/v1/tasks')
//     // const data = await axios.get('/api/v1/tasks')
//     // console.log(data)
//     if (tasks.length < 1) {
//       tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
//       loadingDOM.style.visibility = 'hidden'
//       return
//     }
//     const allTasks = tasks
//       .map((task) => {
//         const { completed, _id: taskID, name } = task
//         return `<div class="single-task ${completed && 'task-completed'}">
// <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
// <div class="task-links">



// <!-- edit link -->
// <a href="task.html?id=${taskID}"  class="edit-link">
// <i class="fas fa-edit"></i>
// </a>
// <!-- delete btn -->
// <button type="button" class="delete-btn" data-id="${taskID}">
// <i class="fas fa-trash"></i>
// </button>
// </div>
// </div>`
//       })
//       .join('')
//     tasksDOM.innerHTML = allTasks
//   } catch (error) {
//     tasksDOM.innerHTML =
//       '<h5 class="empty-list">There was an error, please try later....</h5>'
//   }
//   loadingDOM.style.visibility = 'hidden'
// }

// showTasks()

// // delete task /api/tasks/:id

// tasksDOM.addEventListener('click', async (e) => {
//   const el = e.target
//   if (el.parentElement.classList.contains('delete-btn')) {
//     loadingDOM.style.visibility = 'visible'
//     const id = el.parentElement.dataset.id
//     try {
//       await axios.delete(`/api/v1/tasks/${id}`)
//       showTasks()
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   loadingDOM.style.visibility = 'hidden'
// })

// // form

// formDOM.addEventListener('submit', async (e) => {
//   e.preventDefault()
//   const name = taskInputDOM.value
//   const completed = true


//   try {
//     await axios.post('/api/v1/tasks', { name, completed})
//     showTasks()
//     taskInputDOM.value = ''
//     formAlertDOM.style.display = 'block'
//     formAlertDOM.textContent = `success, task added`
//     formAlertDOM.classList.add('text-success')
//   } catch (error) {
//     formAlertDOM.style.display = 'block'
//     formAlertDOM.innerHTML = `error, please try again`
//   }
//   setTimeout(() => {
//     formAlertDOM.style.display = 'none'
//     formAlertDOM.classList.remove('text-success')
//   }, 3000)
// })
const writeyourname = document.querySelector(`.writeyourname`)
const namefeild = writeyourname.querySelector(`input`)
const namesub = document.querySelector(`.namesub`)
const msgscont = document.querySelector(`.msgss-container`)
let username = "unknown"
const msginput = document.querySelector(`.task-input`)
const formDOM = document.querySelector('.task-form')

const submitbtn = document.querySelector(`.submit-btn`)


writeyourname.addEventListener("submit", (e) => {
  e.preventDefault()
  writeyourname.classList.remove(`show`)
  username = namefeild.value
  showTasks()
})

namesub.onclick = (e) => {
 
}


const showTasks = async () => {
    try {
      const {
        data: { msgs },
      } = await axios.get('/api/v1/msgs')
      // const data = await axios.get('/api/v1/tasks')
      // console.log(data)
      if (msgs.length < 1) {
        return
      }
      const allmsgss = msgs
        .map((message) => {
          const { msg, name } = message
          const mine = username === name
          const mymsg = mine ? "mymsg": ""
          return `<div class="msgdiv ${mymsg}"><span class="name">${name}</span><span class="txt">${msg}</span></div>`
        })
        .join('')
      msgscont.innerHTML = allmsgss
    } catch (error) {
      msgscont.innerHTML =
        '<h5 class="empty-list">There was an error, please try later....</h5>'
    }
  }


  formDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const msg = msginput.value
    const name = username
    console.log("sadfasdfasdfads",username, msg);
  
  
    try {
      await axios.post('/api/v1/msgs', { name, msg})
      showTasks()
      msginput.value = ''
    } catch (error) {
      msginput.value = `error, please try again`
    }
    
  })
  
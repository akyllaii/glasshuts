// const formData = new FormData(document.querySelector('form'));

let personInfo = []
personInfo = JSON.parse(localStorage.getItem('personInfo'))
// todoForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     if (tasks.some(item => item.text.toUpperCase() === event.target[0].value.toUpperCase())) {
//         alert('Нельзя добавить')
//     } else if (event.target[0].value === '') {
//         alert('Поле ввода пустое,напишите задачу')
//     }
//     else {
//         tasks = [...tasks, {
//             id: tasks.length ? tasks.at(-1).id + 1 : 1,
//             text: event.target[0].value,
//             isImportant: false,
//             isDone: false
//         }]
//     }
//
//     addItemInTodoList()
//     localStorage.setItem('tasks',JSON.stringify(tasks))
//
//     event.target[0].value = ''
// })

let payForm = document.querySelector('.form')

payForm.addEventListener('submit', (event) => {
    event.preventDefault()
    personInfo = [...personInfo, {
        name: event.target[1].value,
        surname: event.target[2].value,
        email: event.target[3].value,
        number: event.target[4].value,
        address: event.target[5].value,
        postal: event.target[6].value,
        city: event.target[7].value,
        country: event.target[8].value,
    }]
    localStorage.setItem('personInfo',JSON.stringify(personInfo))
}) 
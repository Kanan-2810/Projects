const addbutton = document.getElementById('btn1')
addbutton.addEventListener('click', () => {
    addTask()
})
const deletebutton = document.getElementById('btn2')
deletebutton.addEventListener('click', () => {
    deleteAllTasks()
})

const conatiner = document.getElementById('tasklist')
const call = { ...localStorage };
if (Object.keys(call).length != 0) {
    showTask();

}
else {
    conatiner.innerText = "No Task Exist"
}
const Sel = document.getElementById('sortopt')
Sel.onchange = () => {
    showTask(Sel.value)
}

function addTask(tasklist) {
    const taskname = document.getElementById('text').value;
    const time = new Date();
    let hrs = time.getHours(), mins = time.getMinutes(), secs = time.getSeconds()
    mins < 10 ? mins = ":0" + mins : mins = ":" + mins;
    secs < 10 ? secs = ":0" + secs : secs = ":" + secs;

    const addAt = time.toLocaleDateString() + "    " + hrs + mins + secs

    if (taskname == "") {
        alert("please enter task");
    }
    else {
        const task = {
            "content": taskname,
            "completed": false,
            "addAt": addAt
        }
        localStorage.setItem(addAt, JSON.stringify(task))

        showTask()
    }
    document.getElementById('text').value=""
}
function showTask(sort) {
    const tasks = { ...localStorage }

    if (Object.keys(tasks).length == 0) {
        conatiner.innerText = "no tasks exist"
    }
    else {
        conatiner.innerHTML = null;
        const result = Object.keys(tasks).map((key) => [key, tasks[key]]);
        if (sort == 'true') {
            result.map((task) => {
                if (JSON.parse(task[1]).completed) {
                    Contains(task)
                }

            })
        }
        else if (sort == 'false') {
            result.map((task) => {
                if (!JSON.parse(task[1]).completed) {
                    Contains(task)
                }

            })
        }
        else {
            result.map((task) => {

                Contains(task)


            })
        }

    }

}


function deleteAllTasks() {
    if(localStorage=="")
    {
        alert("TASK IS NOT PRESENT");
    }
    else
    {
        localStorage.clear()
        showTask()
    }
}

function Contains(task) {

    let cont = document.createElement('div')
    cont.className = "container"
    cont.innerText = JSON.parse(task[1]).content

    let time = document.createElement('div')
    time.className = "timer"
    time.innerText = JSON.parse(task[1]).addAt

    const checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.className = "checker"
    checkbox.checked = JSON.parse(task[1]).completed
    checkbox.onchange = () => {
        const task1 =
        {
            content: JSON.parse(task[1]).content,
            completed: !JSON.parse(task[1]).completed,
            addAt: JSON.parse(task[1]).addAt

        }
        localStorage.setItem(task[0], JSON.stringify(task1))
    }

    let delbutton = document.createElement('button')
    delbutton.textContent = "delete task"
    delbutton.className = "dell"
    delbutton.addEventListener('click', () => {
        localStorage.removeItem(task[0])
        const var1 = document.getElementById(task[0])
        var1.parentNode.removeChild(var1)
    })

    let editbutton = document.createElement('button')
    editbutton.textContent = "edit task"
    editbutton.className = "dell"
    editbutton.addEventListener('click', () => {
        localStorage.removeItem(task[0])
        const var1 = document.getElementById(task[0])
        var1.parentNode.removeChild(var1)
        document.getElementById('text').value = JSON.parse(task[1]).content
        document.getElementById('text').focus()
    })


    const temp = document.createElement('div')
    temp.append(checkbox, time, cont, delbutton, editbutton)
    temp.className = "temper"
    temp.id = task[0]
    conatiner.append(temp);
}

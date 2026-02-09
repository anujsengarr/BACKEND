const fs = require('fs');
const path = require('path');

function readData() {
    const data = fs.readFileSync(path.join(__dirname, 'todo.json'), 'utf8');
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(path.join(__dirname, 'todo.json'), JSON.stringify(data,null,2));
}

function addTodo(item) {
    const todos = readData();
    const newtodo = {
        item: item,
        id: Date.now(),
        status: false
    };
    todos.push(newtodo);
    writeData(todos);
}

addTodo('Learn Node.js');
addTodo('fuck uwuwuw');
const root = document.getElementById('root');
const input = document.getElementById('todo-input');
const submit = document.getElementById('submit');


const ul = document.createElement('ul');
root.appendChild(ul);


submit.addEventListener('click', submitItem);
btnComplete.addEventListener('click', completeItem);
btnDelete.addEventListener('click', deleteItem);


function submitItem(e){
    e.preventDefault();
    if (input.value !== '') {
        addItem(input.value);
        input.value = '';
    }
}

function addItem(val) {
    const itemContainer = document.createElement('div');
    const li = document.createElement('li');
    const btnComplete = document.createElement('button');
    const btnDelete = document.createElement('button'); 

    itemContainer.setAttribute('class', 'item-container');
    li.innerHTML = val;
    btnComplete.innerText = 'Completed';
    btnDelete.innerText = 'Delete';

    ul.appendChild(itemContainer);
    itemContainer.appendChild(li);
    itemContainer.appendChild(btnComplete);
    itemContainer.appendChild(btnDelete);
}

function completeItem(e) {
    console.log(e);
    
}

function deleteItem() {
    ul.removeChild()
}
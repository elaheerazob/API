function dataLode(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
function userLode(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(data => displayUser(data))
}
function lodePost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp =>resp.json())
    .then(data =>console.log(data) )
}

function displayUser(lodeUser){
    const ul =document.getElementById('users');
    for(const user of lodeUser){
        const li=document.createElement('li');
        li.innerText = `Id : ${user.id}  Name : ${user.name} `;
        ul.appendChild(li);
    }
    
}
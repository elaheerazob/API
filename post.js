function postLode(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(postData => post(postData))
}
function post(data){
    const section =document.getElementById('posts')
    for(const post of data){
        const div =document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>`
        section.append(div)
        
    }
}
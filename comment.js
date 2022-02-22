function commentLode(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comment => commentPsot(comment))
}
function commentPsot(data){
    const commentDiv =document.getElementById('comment');
    for(const comment of data){
       const div =document.createElement('div')
       div.style.textAlign ='center'
       div.classList.add('comment')
       div.innerHTML=`
       <h2> id :${comment.id}</h2> ,
       <p>Name : ${comment.name} </p>,
       <p>Email : ${comment.email} </p>,
       <p> Body : ${comment.body} </p>
       `
       commentDiv.appendChild(div)
    }
}
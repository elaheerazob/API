function photo(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res =>res.json())
    .then(dataimg => postImg(dataimg))
}
function postImg(data){
    const photo =document.getElementById('images')
    for(const img of data){
        const div =document.createElement('div')
        div.style.textAlign ='center'
        

        div.classList.add('pic')
        div.innerHTML= `id : ${img.id} 
        name : ${img.title},
        <img src="${img.url}" width ="600" hight ="600">
        `
        photo.appendChild(div);
    }
    
}
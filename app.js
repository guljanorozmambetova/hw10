// console.log(p);
const btn=document.getElementById('btn')
const content=document.getElementById('content')

const removeContent=document.getElementById('removeContent')
const remove=document.getElementById('remove')

btn.onclick=()=>{
    const newContent=document.createElement('p')
    newContent.textContent='новый текст'
   
    content.appendChild(newContent)}
    remove.onclick=()=>{
        removeContent.remove() 
}

removeContent.document.getElementById('нрвый текст').remove()

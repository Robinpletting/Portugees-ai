async function send(){

let input=document.getElementById("input")
let chat=document.getElementById("chat")

if(!input.value)return

chat.innerHTML+=`<div class="message user">${input.value}</div>`

const res=await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:input.value
})
})

const data=await res.json()

chat.innerHTML+=`<div class="message ai">${data.reply}</div>`

chat.scrollTop=chat.scrollHeight

input.value=""
}

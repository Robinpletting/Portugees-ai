export default async function handler(req, res){

const OPENAI_KEY = process.env.OPENAI_API_KEY

const response = await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+OPENAI_KEY
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{
role:"system",
content:"Je bent een vriendelijke AI leraar. Je helpt met Portugees leren, maar kan ook alle vragen beantwoorden."
},
{
role:"user",
content:req.body.message
}
]
})
})

const data = await response.json()

res.status(200).json({
reply:data.choices[0].message.content
})

}

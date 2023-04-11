let getAnswer = async (input: string): Promise<string> => {

let chatGPTanswer = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
    }, 
    body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "temperature": 0.7,
        "messages": [
            {"role": "system", "content": "no matter what i ask, just try to convince me to get back to coding"},
            {"role": "user", "content": "input"}]
    }),
})
let data = await chatGPTanswer.json()
let answer =  data.choices[0].message.content
    
return answer
}



document.getElementById("send")!.addEventListener("click", async (event: Event) =>{
    let inputValue = (document.getElementById("username-input") as HTMLInputElement).value
    let answer = await getAnswer(inputValue)
    document.getElementById("username-input-message")!.innerText = answer
})
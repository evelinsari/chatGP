let getAnswer = async (input: string): Promise<string> => {
  let chatGPTanswer = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: (document.getElementById("personality-input")! as HTMLInputElement).value
            //content: input
        },
          { role: "user", content: "input" },
        ],
      }),
    }
  );
  let data = await chatGPTanswer.json();
  let answer = data.choices[0].message.content;
  return answer;
};
document.getElementById("send")!.addEventListener("click", async (event: Event) => {
    let inputValue = (document.getElementById("username-input")! as HTMLInputElement).value
    let answer = await getAnswer(inputValue);
    document.getElementById("username-input-message")!.innerText = answer;
  });

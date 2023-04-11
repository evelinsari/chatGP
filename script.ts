document.getElementById("username-input")!.addEventListener("input", (event: Event) =>{
    let inputValue = (event.target as HTMLInputElement).value;
    document.getElementById("username-input-message")!.innerText = inputValue;
})
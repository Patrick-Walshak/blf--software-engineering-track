const chatBox = document.getElementById("chatBox")
const messageInput = document.getElementById("messageInput")
const sendBtn = document.getElementById("sendBtn")

let messages = JSON.parse(localStorage.getItem("messages")) || []//It tries to get saved messages from the browser, converts them back into an array, and if nothing is found, it just starts with an empty array

function loadMessage(){
  console.log(messages)

    messages.forEach((message) => {
      chatBox.innerHTML += ` <div class="flex justify-end">
    <div class="bg-[#8EB69B] text-[#051F20] px-5 py-4 rounded-[25px]">
      ${message}
    </div>
  </div>`
    });
} 
loadMessage()

sendBtn.addEventListener("click", (e) =>{
  e.preventDefault()

  
  let message = messageInput.value//It takes what the user typed in the input box and stores it in a variable called message
  messages.push(message)
    
  localStorage.setItem("messages", JSON.stringify(messages))//It saves your messages into the browser storage.

   
loadMessage()
messageInput.value = ""

})

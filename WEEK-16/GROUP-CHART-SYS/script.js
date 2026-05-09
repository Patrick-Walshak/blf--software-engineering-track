const chatBox = document.getElementById("chatBox")
const messageInput = document.getElementById("messageInput")
const sendBtn = document.getElementById("sendBtn")

sendBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    let message = messageInput.value
    

    chatBox.innerHTML += ` <div class="flex justify-end">
    <div class="bg-[#8EB69B] text-[#051F20] px-5 py-4 rounded-[25px]">
      ${message}
    </div>
  </div>`

messageInput.value = ""

})

const messageForm = document.getElementById("message-form");
const linkForm = document.getElementById("link-form")
const messageContainer = document.getElementById("message-container")

if (window.location.hash) {
    //decoding the hash
    const hash = window.location.hash
    const base64 = hash.split('#')[1]
    const decrypt = atob(base64)
    console.log(decrypt)
    messageForm.classList.add('hide')
    linkForm.classList.add('hide')
    messageContainer.classList.remove('hide')
    document.querySelector("h1").innerHTML = decrypt
} else {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault()
        messageForm.classList.add('hide')
        linkForm.classList.remove('hide')
        const input = document.querySelector("#message").value
        const encrypted = btoa(input)
        const encryptedUrl = `${window.location}#${encrypted}`
        const urlInput = document.querySelector("#link-input")
        urlInput.value = encryptedUrl
        //select the input and all the text inside of it
        urlInput.select();
    })

}






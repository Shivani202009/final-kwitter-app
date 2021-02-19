function login() {
    username= document.getElementById("user_input").value

    localStorage.setItem("user_name", username)
    window.location="kwitter_room.html"
}
import newNode from "./newNode.js"

async function profile() {
    let userId = window.location.search.split("=")[1]
    let userData = await fetch("https://reqres.in/api/users/" + userId)
    let data = (await userData.json()).data
        // console.log(data);
    let userNode = newNode(data, false)

    document.querySelector(".container").append(userNode)
}


profile()
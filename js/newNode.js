export default function({ avatar, email, first_name, id, last_name }, linkChiqsin = true) {
    let template = document.getElementById("template")
    let newTemplate = template.content.cloneNode(true)

    newTemplate.querySelector(".avatar").src = avatar
    newTemplate.querySelector(".email").textContent = email
    newTemplate.querySelector(".fullname").textContent = `${first_name} ${last_name}`
    if (linkChiqsin) {
        newTemplate.querySelector(".linking").href = `/profile.html?user=${id}`
    } else {
        newTemplate.querySelector(".linking").style.display = `none`
    }

    return newTemplate;
}
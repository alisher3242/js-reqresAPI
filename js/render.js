import newNode from "./newNode.js";

export default function(data, list) {
    data.forEach(user => {
        let newUser = newNode(user, true)
        list.append(newUser)
    });
}
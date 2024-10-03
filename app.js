/* 
    ? Event Listeners
    * allows us to execute a callback fx when an event occurs
    * .addEventListener() takes an event and fires a callback
    * event - a string of what happens
    * callback - a fx that is triggered immediately after the event occurs
*/

document.addEventListener("DOMContentLoaded", (event) => {
	// console.log(event);
});

/*
 * 1. Event listener listens for page to be loaded
 * 2. We collect the event via the parameter
 * 3. We can traverse thru the event object
 */

/* 
    ? Goal: add to our to do list whatever we input into input field & click add item
    TODO: grab the value entered into the input
    TODO: 
*/

const addItem = document.getElementById("submit");
const toDoList = document.getElementById("ulToDo");

// input.addEventListener("keyup", evt => {
//     console.log(evt.target.value)
// })

addItem.addEventListener("click", (evt) => {
	const input = document.getElementById("input");
    const li = document.createElement("li")
    li.textContent = input.value
    li.className = "listItems"
    toDoList.appendChild(li)
    input.value = ""
});

/* 
    ! SPICEY AF challenge!
    * we can add items BUT!
    * I wanna remove them!!!!

    * NOW, you must look thru Google on what you'd use to remove a node
    ! Paul ordered Thai HOT challenge
    * ensure you have some error handling
    * it must stop if there are no items in the to do list
*/

const removeBtn = document.getElementById("remove")

removeBtn.addEventListener("click", evt => {
    console.log(evt)

    if (toDoList.childElementCount === 0) {
        errorHandling()
    } else {
        let lastItem = toDoList.children[toDoList.children.length - 1]
        toDoList.removeChild(lastItem)
    }
    
})

function errorHandling() {
    let h5 = document.createElement("h5")
    h5.textContent = "No more items to remove"
    document.body.appendChild(h5)
}
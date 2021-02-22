let  btn = document.createElement("Button");
let counter = 0;
// Initial State
btn.innerHTML = 0;
btn.id = "btn";
btn.className = "btnClass";

// Add to DOM 
document.body.appendChild(btn);


btn.onclick = function() {
    counter = counter+1;
    btn.innerHTML=counter;
}
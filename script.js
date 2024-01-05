//your code here

let buttonEle=document.getElementById("addTodoBtn");
buttonEle.addEventListener("click",function() {
	let inputElementVal=document.getElementById("newTodoInput").value;
	let olEle=document.getElementById("todoList");
	let liEle=document.createElement("li");
	if(inputElementVal==""){
		alert('please add todo');
	}else{
		liEle.innerText=inputElementVal;
		olEle.appendChild(liEle);
	}
	

	
	
})



//your code here

let buttonEle=document.getElementById("addTodoBtn");
buttonEle.addEventListener("click",function() {
	let inputElement=document.getElementById("newTodoInput");
	let olEle=document.getElementById("todoList");
	let liEle=document.createElement("li");
	if(inputElement.value==""){
		alert('please add todo');
	}else{
		liEle.innerText=inputElement.value;
		olEle.appendChild(liEle);

		inputElement.value="";
	}
	

	
	
})



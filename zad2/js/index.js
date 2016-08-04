var form = document.getElementById("numForm");

form.addEventListener("submit", function(e){
	
	var inp = form.elements[0].value;
	
	Ajax.request('POST','handle.php', true, function(response){
		response = JSON.parse(response);

		var size = 100;
		
		for(var x = 0; x < response.length; x++){
			
			let divEle = document.createElement("div");
			divEle.innerHTML = response[x];
			
			if(x != 0){
				divEle.height = divEle.width = size*x;
			}else{
				divEle.height = divEle.width = size;
			}

			body.appendChild(divEle);
		}
	}, { num: inp});
});
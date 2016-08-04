var colorButt = document.getElementById('colorButt');

function changeColor(response){
	
	if( typeof changeColor.x == 'undefined'){
		changeColor.x = 0;
	}

	if(changeColor.x >= response.length){
		changeColor.x = 0;
	}

	document.getElementById('colorBox').style.backgroundColor = response[changeColor.x];

	changeColor.x++;
}

colorButt.addEventListener('click', function(e){
		Ajax.request('GET', 'handle.php', true, function(response){
			
			response = JSON.parse(response);

			setInterval( function(){changeColor(response) }, 500);
		});
});

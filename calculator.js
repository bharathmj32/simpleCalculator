		function display(x){
				document.getElementById("txt").value+=x 
		}
		
		function backspace(){
			var str=document.getElementById('txt').value
			document.getElementById('txt').value=str.substring(0,str.length-1)			
		}

		function compute(){
			var str=document.getElementById('txt').value
			document.getElementById('txt').value=eval(str)
		}
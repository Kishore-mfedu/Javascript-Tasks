
		let cal =  '';
		let operator = '';
		function calculation(value) {
   		if (value === '+' || value === '-' || value === '*' || value === '/') {
        	operator = value;
        	if (cal !== '') {
            	cal = eval(cal);
            }
            cal += operator;
        } else {
        	cal += value;
        }
        document.getElementById('res').innerHTML = cal;
		}
		function deletevalue(){
    	cal = cal.toString().slice(0, -1);
    	document.getElementById('res').innerHTML = cal;
		}

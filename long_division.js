function long_division(n, d, mod){
	var remainders = [n];
	var ptemp = n;
	var qtemp = -4;
	for(i= 0; i < d; i++){
		qtemp = (ptemp*mod) % d;
		remainders.push(qtemp);
		ptemp = qtemp;
	}
	return what_type(remainders, d, mod);
}

function what_type(remainders, d, mod){
	if(gcd(mod, d) == 1){
		var result = find_period(remainders, 3);
		return [3, result[0], result[1]];
	}
	if(remainders[remainders.length -1] == 0){
		var result = find_period(remainders, 1);
		return [1, result[0], result[1]];
	}
	result = find_period(remainders, 2);
	return [2, result[0], result[1]];
}

function find_period(remainders, type){
	if(type == 1){
		var zero = false;
		var i = 0;
		for(i = 0; i < remainders.length; i++){
			if(remainders[i]==0){
				break
			}
		}		
	}
	if(type == 3){
		for(i = 1; i < remainders.length; i++){
			if(remainders[i]==remainders[0]){
				break;
			}
		}
	}
	i++

	if(type == 2){
		var arr = Array.apply(null, new Array(remainders.length)).map(Number.prototype.valueOf,0);
		
		for(i = 1; i < remainders.length; i++){
			if(arr[remainders[i]]==0){
				arr[remainders[i]]++;
			}
			else{
				var end = i-1;
				var end_num = remainders[i];
				break;
			}
		}
		for(i = 0; i < remainders.length; i++){ 
			if(remainders[i] == end_num){
				var start = i;
				break;
			}
		}

		return [remainders.slice(0, end+1), end-start+1];
	}
	//remainders, and the length of the period
	return [remainders.slice(0, i), i-1];
}

function gcd(a, b) {

    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}



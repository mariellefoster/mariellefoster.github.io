function is_prime(n){
	if (n ==1){
		return false;
	}
	if (n == 2){
		return true;
	}
	for(i = 2; i < Math.sqrt(n, 0.5)+1; i++)
        if (n%i==0){
        	return false;
        }           
    return true;
}

//if a number is prime and is of the form 2q+1 where q is prime
function sophie_germain(n){
	if (is_prime((n*2)+1)){
		return true;
	}
	return false
}

//happy primes
function is_happy(n){
	var h = {};
	n = n.toString();
	while(n != '1'){
	    //console.log(n)
		if (n in h){
			return false;
		}
		var sum = 0
		for(i = 0; i < n.length; i++){
			sum += Math.pow(parseInt(n[i], 10), 2);
		}
		h[n] = true
		n = sum.toString()
	}
	return true;
}

function prime_factors(n){
	factors = [1];
	for(k = 2; k < Math.floor(n/2); k++){
		//console.log(i);
		if (is_prime(k)){
			//console.log("ben")
			if(n%k == 0){
				factors.push(k);
			}
			while (n%k == 0){
				//console.log(n)
				n = n/k;
			}			
		}
	}
	if (is_prime(n)){
		factors.push(n)
	}
	return factors;
}


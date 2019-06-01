<?php
	function findPrime($n){
		if($n<2){
			return 0 ;

		}
		else{
			for($i=2;$i<$n;$i++){
				if($n%$i==0 ){
					return 0;
				}	
			}
			return 1;
		}
	}
	if (findPrime(12)==0){
		echo " khong phai so nguyen to";
	}
	else{
		echo "la so nguyen to";
	}
	 

	
?>
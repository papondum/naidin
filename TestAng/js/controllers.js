angular.module('todoApp', [])
  .controller('mainCtrl', function($scope) {  	
  	$scope.basket=[
  	{"name":"Harry Potter and the Philosopher's Stone","quantity":0},
  	{"name":"Harry Potter and the Chamber of Secrets","quantity":0},
  	{"name":"Harry Potter and the Prisoner of Azkaban","quantity":0},
  	{"name":"Harry Potter and the Goblet of Firec","quantity":0},
  	{"name":"Harry Potter and the Order of the Phoenix","quantity":0},
  	{"name":"Harry Potter and the Half-Blood Prince","quantity":0},
  	{"name":"Harry Potter and the Deathly Hallowss","quantity":0}]
  	
  	$scope.add=function(x){				//>>>>>>>>>>>>>>>>>>>>>>>>>>get a set that have quantity of book
  		for(i=0;i<$scope.basket.length;i++){
  			if($scope.basket[i].name==x.name){
  				$scope.basket[i].quantity+=1;
  				break;
  			}
  		}  		
  		getIndividualnumber();  
  	}


	function sortNumber(a,b) {
		    return a - b;
	}
  	
  	var getIndividualnumber=function(){			//>>>>>>>>>>>>>>>get a individual number from basket
  		$scope.sum=0;
  		$scope.Individualset=[];
  		$scope.individual=0;
  		for(i=0;i<$scope.basket.length;i++){  			
  			if($scope.basket[i].quantity!=0){
  				$scope.individual+=1;
  				$scope.sum+=$scope.basket[i].quantity;
  				$scope.Individualset.push($scope.basket[i].quantity);
  				$scope.Individualset.sort(sortNumber);
  			}

  		}
  	}

  	$scope.DecreaseQuantity=function(){  	
  		var counter=0;	
  		for(i=0;i<$scope.basket.length;i++){
  			if($scope.basket[i].quantity!=0){
  				counter+=1;
  				$scope.basket[i].quantity-=1;  				

  			}  		
  		}
  		var roundresult=calculation(counter);  		
  		getIndividualnumber();
  		return roundresult;
  	}

  	$scope.getResult=function(){
  		$scope.result=0;
  		while($scope.sum>0){
  		  	$scope.result=$scope.	result+$scope.DecreaseQuantity();  		  
  		}  		
  	}
  	var calculation=function(x){ 
  		switch(x){
  			case 7:
  				return 700-((700*60)/100);	//280
  				break;
  			case 6:
  				return 600-((600*50)/100);	//300
  				break;
  			case 5:
  				return 500-((500*40)/100);	//300
  				break;
  			case 4:
  				return 400-((400*30)/100);	//280
  				break;
  			case 3:
  				return 300-((300*20)/100);	//240
  				break;
  			case 2:
  				return 200-((200*10)/100);	//180
  				break;
  			case 1:
  				return 100;					//100
  				break;   				
  		}
  	}


  });
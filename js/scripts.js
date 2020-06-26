
// 1) 
// const userCount = Number (prompt('Put your count'));
// let i = 1;
// while  ( i<userCount) {
// 	alert ('#');
// 	i++;
// }



// 2) 
// const userNumber = Number (prompt('Put your number'));
// for (let i = userNumber; i >= 0; i--) {
// 	console.log (i);
// }



// 3) 
// let userBase = Number (prompt('Put your base'));
// const userPower = Number (prompt('Put your power'));
// let result = userBase;

// for (let i = 1; i < userPower; i++) {
// 	result = result * userBase;
// }
// console.log(result);



// 4) 
// const userNumber1 = Number (prompt('Put your Number1'));
// const userNumber2 = Number (prompt('Put your Number2'));
// if ( userNumber1 > userNumber2 ) {
// 	devidersCommon ( userNumber2, userNumber1 )
// } else {
// 	devidersCommon ( userNumber1, userNumber2 )
// }

//  function devidersCommon(minNumber, maxNumber) {
//  	for ( let i = 1; i <= maxNumber; i++ ) {
//  			if (( minNumber % i === 0 ) && ( maxNumber % i === 0)) {
//  				console.log(i); 
//  			}
//  		}
//  }

// 5) 
// const userCount = Number (prompt('Put your count'));
//  let math = { 
//  	getFactorial (count) {
// 		let result = 1;
// 		for (let i = 1; i <= count; i++ ) {
// 			result = result * i;
		
// 		}
// 		return result;
// 	}		
// }

// console.log(math.getFactorial(userCount));

// 1)
// let userAnswer;
//  do {
//  	userAnswer = Number (prompt ('How much is 2 + 2 * 2 = ?'));
//  } 
//  	 while ( userAnswer !== 6 );
// alert ('Your answer is right');

// 2) 
// let i = 1;
// let resultDevide = 1000;
// 	do { resultDevide = resultDevide / 2; 
// 		 i++;
// 	}
// 	while (resultDevide > 50);
// console.log (i);
// console.log (resultDevide);

// 3)
const userCount = Number (prompt('Put your count'));
for ( let i=1; i<=100; i++) {
	if (i % userCount === 0) {
		console.log (i);
	}
}
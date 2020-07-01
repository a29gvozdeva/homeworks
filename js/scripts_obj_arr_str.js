// const currentArray = [ 1, 2, 3, 4, 5, 6, 7, 11, 9, 10];
// function printArray ( dataArray ) {
// 		console.table (dataArray)
// };
// printArray (currentArray);


// function evenElements ( dataArray ) {
// 	dataArray.forEach ( element => {
// 	if (element % 2 === 0) {
// 	console.log (element);
// }
// } )
// }
// evenElements(currentArray);


// function summElements (dataArray) {
// 	let result = 0;
// 		for ( let i = 0; i < dataArray.length; i++) {
// 			result = result + dataArray[i];
// 	};
// return result;
// };
// console.log (summElements (currentArray));


// function maxElement(dataArray) {
// 	let maxCount = 0;
// 	for ( let i = 0; i < dataArray.length; i++ ) {
// 		if (dataArray[i] > maxCount) {
// 			maxCount = dataArray[i];
// 		}
// 	}
// 	return maxCount;
// };
// console.log(maxElement(currentArray));


// function addNewElement (dataArray, index, element) {
// 	let previousValue;
// 	for ( let i = 0; i<dataArray.length+1; i++) {
// 		previousValue = dataArray[i];
// 		 if ( i === index) {
// 		 	dataArray[i+1] = previousValue;
// 		 	dataArray[i] = element; 
// 		 }
// 		 if ( i > index ) {
// 		 	dataArray[i] = dataArray[i-1];
// 		 }
// 	}
// }
 

// let firstArray = ['angel', 'clown', 'mandarin', 'sturgeon'];
// function addNewElement ( indexAdd, value, currentArray ) {
// 	currentArray.splice(indexAdd, 0, value);
// 	return currentArray;
// };
// console.table(addNewElement(2, 'seletcu', firstArray));


// function deleteElement ( indexDelete, currentArray ) {
// 	currentArray.splice(indexDelete, 1);
// 	return currentArray;
// };
// console.table(deleteElement(3, firstArray));	

// const Array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const Array2 = [ 10, 11, 12, 13, 2, 15, 16, 17, 18, 19];

// function allElements ( currentArray1, currentArray2 ) {
// 	for ( let i = 0; i <= currentArray1.length; i++) {
// 		for ( let j = 0; j <= currentArray2.length; j++ ) {
// 			if ( currentArray1[i] === currentArray2[j] ) {
// 			currentArray1.splice (i, 1);
// 			};
// 		};
// 	};
// 	return currentArray1.concat(currentArray2);
// };

// console.table(allElements(Array1, Array2));


// const Array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const Array2 = [ 10, 11, 12, 13, 2, 15, 16, 17, 18, 19];
// function allElements ( currentArray1, currentArray2 ) {
// 	return currentArray1.concat(currentArray2.filter( ( item ) => currentArray1.indexOf ( item ) < 0 ) );
// };
// // console.table(allElements(Array1, Array2));

// function commonElements ( currentArray1, currentArray2)  {
// 	return currentArray1.filter( ( item ) => currentArray2.indexOf (item) >= 0 ) ;
// };
// // console.table(commonElements(Array1, Array2));


// function uniqueElements ( currentArray1, currentArray2)  {
// 	return currentArray1.filter( ( item ) => currentArray2.indexOf (item) < 0 ) ;
// };
// console.table(uniqueElements(Array1, Array2));

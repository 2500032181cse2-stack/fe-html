//Passing a Function into Another Function
// function sayHello() {
//     console.log("Hello");
// }

// function execute(myFunction) {
//     myFunction();//Call/execute the function stored inside myFunction.
// }

//  execute(sayHello);
// //Avoiding Repetitive Functions
// function add() {
//     console.log("Adding");
// }

// function subtract() {
//     console.log("Subtracting");
// }

// function execute(operation) {
//     operation();
// }

// execute(add);
// execute(subtract);

// function doTask(callback) {
//     		console.log("Task started");
//     		// Do some task...
//     		callback();   // execute the function when the task is done
// 	}
// 	function finished() {
//     		console.log("Task finished");
// 	}
// 	doTask(finished);
	// function downloadImage(callback) {
    // 		console.log("Download started");

    // 		setTimeout(function() {
    //     	console.log("Download completed");
    //     	callback();
    // 		}, 5000);
	// }

	// function displayImage() {
    // 		console.log("Displaying JPG");
	// }

	// downloadImage(displayImage);

	// console.log("Do other work...");

// 	function downloadImage() {
//     return new Promise(function(resolve, reject) {

//         console.log("Downloading JPG...");

//         let success = false;

//         if (success) {
//             resolve("photo.jpg");
//         } 
//         else {
//             reject("Download failed");
//         }

//     });
// }

// downloadImage()
//     .then(function(image) {  //resolve() → .then() → success
//         console.log("Display:", image);
//     })
    // .catch(function(error) {//reject() → .catch() → failure
    //     console.log(error);
    // });

	//Async Wait

	function getData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Data received");
        }, 3000);
    });
}

async function showData() {
    let result = await getData();
    console.log(result);
}

showData();
//async defines a function that works with Promises, 
// and await waits for a Promise to complete and gives us its result.


function getData() {
    return new Promise(function(resolve) {

        setTimeout(function() {
            resolve("Data received");
        }, 3000);

    });
}

async function showData() {

    let result = await getData();

    console.log(result);
}

showData();
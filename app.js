// const fetchDogImage = () => {
//     // If the promise is fulfilled, the .then()'s callback (which takes in the response (data from API)) triggers
//     const request = fetch("https://dog.ceo/api/breeds/image/random")
//         .then((response) => {
//             return response.json();                                        // Returns A promise
//         })
//         .then((data)=>{
//             document.querySelector("img").src = data.message               // Now 'data' contains the parsed JSON data - An actual Object (data has a key (message))(data.message is the URL you get back)
//         })
//         .catch((error) => {
//             console.error('Error during fetch:', error);                   // Error handling 
//         });

// };

// const button = document.querySelector("button");
// button.addEventListener('click', fetchDogImage);

// //The fetch() function in JavaScript is used to make network requests (typically HTTP requests) to fetch resources from a network. It returns a Promise that resolves to the Response to that request, whether it is successful or not.


const fetchDogImage = async () => {                                                 // async keyword tells the program that this is a asynchronicity function
    try {
        const response = await fetch("https://dog.ceo/api/breed/corgi/images");    // await keyword tells the program to wait for the fetch to happen
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);     // if the fetch is not successful (promise rejected) this error is displayed on the console
        }
        
        const data = await response.json();                                         // Awaits the process of converting the response (promise) to a JSON

        const imagesContainer = document.createElement("div");

        data.message.forEach((dogURL) => {
            const dogImage = document.createElement("img");
            dogImage.src = dogURL;
            imagesContainer.appendChild(dogImage);
        });

        document.querySelector("body").appendChild(imagesContainer);
        
    } catch (error) {
        console.error('Error during fetch:', error);                                // catches an error at any point and displays it on the console
    }
};

const button = document.querySelector("button");
button.addEventListener('click', fetchDogImage);

// const {readFile, writeFile} = require("fs");


//Now if we put right path we should see result and if we put wrong path we should see the error
//we can make it cleaner by setting up async await...
// const getText = (path) => {
    //     return new Promise((resolve, reject) => {
        //         readFile(path, "utf8", (err, data) => {
            //             if(err) {
                //                 reject(err);
//             } else {
//                 resolve(data);
//             }    
//         });
//     });
// };
// getText("./1/content/first.txt")
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

// start();



// const start = async() => {
    // try {
    //     const first = await getText("./1/content/first.txt");
    //     console.log(first);        
    // } catch (error) {
    //     console.log(error);
    // }
// }



//We we have functions provided by libraries which already returns a promise

const {readFile, writeFile} = require("fs").promises;
const util = require("util");

//if we write .promises in require then we need not to write this code
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFile("./1/content/first.txt", "utf8");
        const second = await readFile("./1/content/second.txt", "utf8");
        await writeFile("./1/content/result-async-await.txt", `Hereis data: ${first}, ${second}.`, {flag: "a"});
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();
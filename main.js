
const myPromise = new Promise((res, rej) => {

    setTimeout(() => {
        res("Iam The Good Promise")
    }, 1000);
})

async function readData() {
    console.log("Before Promise");

    try {
        let myData = await fetch("https://api.github.com/users/elzerowebschool/repos")
        console.log(await myData.json());

    } catch (error) {
        console.log(`rejected: ${error}`);
    } finally {
        console.log("After Promise");

    }
}

readData()
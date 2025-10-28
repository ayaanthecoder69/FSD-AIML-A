// Synchronous 

function login(username, password) {
    if (username === "Anshul" && password === "1234") {
        console.log(`Welcome back, ${username}!`);
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }
}

function getData() {
    console.log("Getting your data...");
    for (let i = 0; i < 1e8; i++) {} 
    return ["Mail", "Notifications", "Profile Info"];
}

function displayData(data) {
    console.log("Here is your data:", data);
}

function logout(username) {
    console.log(`Goodbye, ${username}. You have been logged out.`);
}

if (login("Anshul", "1234")) {
    let data = getData();
    displayData(data);
    logout("Anshul");
}


// Asynchronous 

function login(username, password) {
    if (username === "Anshul" && password === "1234") {
        console.log(`Welcome back, ${username}!`);
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }
}

function getData(callback) {
    console.log("Fetching your data, please wait...");
    setTimeout(() => {
        let data = ["Mail", "Notifications", "Profile Info"];
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("Here is your data:", data);
}

function logout(username) {
    console.log(`Goodbye, ${username}. You have been logged out.`);
}

if (login("Anshul", "1234")) {
    getData((data) => {
        displayData(data);
        logout("Anshul");
    });
}
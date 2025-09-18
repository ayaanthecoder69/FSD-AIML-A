function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('register end');
            resolve();
        }, 2000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('send Email end');
            resolve();
        }, 8000);
    });
}

function calculatedata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('login end');
            reject('Login Error');
        }, 3000);
    });
}

function sendSMS() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('get data end');
            resolve();
        }, 1000);
    });
}

function logout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('display data end');
            resolve();
        }, 4000);
    });
}

async function f1() {
    try {
        await login();          // 2s
        await getData();        // 8s
        await calculatedata();  // 3s -> will reject here
        await sendSMS();        // ❌ skipped (because of reject)
        await logout();         // ❌ skipped
    } catch (err) {
        console.log('Error: ' + err);
    }
}

f1();

console.log('call other application');

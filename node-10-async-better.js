
setTimeout(function () {
    try {
        throw new Error("DANGER ZONE!");
    } catch (e) {
        console.log("I caught the error!");
    }
}
, 2000);

// what's the expected output?  why?
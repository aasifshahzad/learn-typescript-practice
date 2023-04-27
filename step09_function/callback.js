function myCallBack(text) {
    console.log(text, "has been purchased");
}
function callingFunction(initialText, callback) {
    console.log("searching");
    console.log("searching");
    console.log("searching");
    callback(initialText);
}
callingFunction("Pizza", myCallBack);
export {};

function myCallBack(text:string){
    console.log(text, "has been purchased" );
}

function callingFunction(initialText: string, callback: (text: string) => void)
{   
    console.log("searching");
    console.log("searching");
    console.log("searching");
    callback(initialText);
}

callingFunction("Pizza", myCallBack);
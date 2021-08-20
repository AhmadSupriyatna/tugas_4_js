var a =180;
var b =205;
var c =190;
if (a>b&&a>c){
    if (b>c){
        console.log("abc");
    }
    else{
        console.log("acb");
    }
}
else if(b>a&&b>c){
    if (a>c){
        console.log("bac");
    }
    else{
        console.log("bca");
    }
}
else{
    if(a>b){
        console.log("cab");
    }
    else{
        console.log("cba");
    }
}

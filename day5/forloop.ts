for(var i=1;i<=5;i++){
console.log(i); // 1 2 3 4 5
}
 

for(var i=1;i<=7;i++){
    setTimeout(function(){console.log(i)},1000);// 8
}

 for(let i=1;i<=7;i++){
    setTimeout(function(){console.log(i)},1000);// 8
} // 1 2 3 4 5 6 7 8


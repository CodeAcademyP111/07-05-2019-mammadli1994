tapsiriq-1

var number=Number(prompt("reqemi daxil edin "));

if(!isNaN(number)){
    
    for(var count=0; number>0 ; count++){
        var  number=(number-(number%10))/10;
        count+=0

    }

    document.write(  count +"-mertebeden ibaretdir");



}else{
    alert("zehmet olmasa eded daxil edin!!!")
}
var word = prompt("Soz daxil edin:");
for(var i=0;i<word.length;i++){
    document.writeln(word); 
}

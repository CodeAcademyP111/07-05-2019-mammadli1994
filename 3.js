// tapsiriq-2
var word=prompt("sozu daxil et")
var number=prompt("sayi daxil et")

function repeat(word,number){
var repeat=parseInt(number);

for(var i=0; i<repeat; i++){
    document.write(word+ "  " + i);
    console.log(word+ "  " + i);;
    
}
}
repeat(word,number)
function Category(){
    let input = document.getElementById('searchbar').value 
    input= input.toLowerCase();
    let x= document.getElementsByClassName('fields');
    for(i=0;i<x.length;i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";
        }
        else{
            x[i].style.display="list-item";
        }
    }
}


/*var x= ["birds","anime","vehicle.jpeg","vehicle.jpeg"];

for(i=0;i<x.length;i++){
    function slide()
    {
        document.gatElementById("slideimg").src=x[i];
        
    }
    setInterval(slide,(i+1)*1000);
}*/
function first(){
   document.getElementById("slideimg").src="anime";
}
function second(){
    document.getElementById("slideimg").src="birds";
 }
 function third(){
    document.getElementById("slideimg").src="vehicle.jpeg";  //next img ka name dalte h , isliye last wale me 1 st img hi dalenge html wala
 }
 function fourth(){
    document.getElementById("slideimg").src="nature.jpeg";
 }
 setInterval(first,2000);
 setInterval(second,4000);
 setInterval(third,6000);
 setInterval(fourth,8000);



    let a = 0;
    const ab = document.getElementById("B45");
//    ab.style.scale = "2 0.7"
    

    //random
function Lol(){
      a++;
       localStorage.setItem(a,a);
    switch (a){
        case 1:
            alert("Hi");
                document.getElementById("B45").textContent = "Dont click me!";
        break;
        case 5:
            alert("Stop clicking me");
        break;
        case 10: 
        
       break;
    }
}
    //idk yet
            window.onbeforeunload = function(){
                Looptest();
            };

    function Looptest(){
        switch (a){
            case 3:
                alert("FUCK YOU CUNT")
            break;
            default: 
               localStorage.clear();
            break;
        }
    }
    //i wont let you leave

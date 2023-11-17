    let a = 0;
    let b = 0; 
    const ab = document.getElementById("B45");
//    ab.style.scale = "2 0.7"
    

    //random
function Lol(){
      a++;
       localStorage.setItem(a,a);
        if (b < 1)
        {
            document.getElementById("B45").textContent = "Dont click me! " + a;
        }
        else
        {
            document.getElementById("B45").textContnet = "STOP CLICKING ME!" + a;
        }



    
    switch (a){
        case 1:
            alert("Hi"); 
        break;
        case 5:
            alert("Stop clicking me");
        break;
        case 10: 
            if (b != 10) {
                a = 0;
                    }
                    else
                { 
                localStorage.clear();
                }
            b++;
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
                alert("uh oh");
            break;
            default: 
               localStorage.clear();
            break;
        }
    }
    //i wont let you leave

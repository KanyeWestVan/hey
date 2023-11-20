    let a = 0;
    let b = 1; 
    const ab = document.getElementById("B45");
//    ab.style.scale = "2 0.7"
    

    //random function
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }   
    //random variables
        let x1 = getRandomInt(300);
        let x2 = getRandomInt(300);
        let y1 = getRandomInt(300);
        let y2 = getRandomInt(300);
    ab.style.left = x1;
    //Button Function
function Lol(){
      a++;

    
    //stuff
       localStorage.setItem(a,a);
        if (b > 1)
        {
            document.getElementById("B45").textContent = "good luck " + "a = " + a + "b =" + b;
        }
        else
        {
            document.getElementById("B45").textContent = "Dont click me! " + a;
        }


        
    //switch
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
            }
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

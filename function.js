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
        break;
        case 5:
            alert("Stop clicking me BUDDY");
        break;     
    }
    //idk yet
    function Looptest(){
            window.location.replace("https://thedoortester.netlify.app/");
    }
    //i wont let you leave
    window.onbeforeunload = function(){
        Looptest();
    };

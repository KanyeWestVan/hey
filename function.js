    let a = {
      a:0,
      //main value of the thing
      b:0,
      //this helps progress
      c:0,
      //this also progresses
      d:0,
      //this is not known yet
      e:1
    };
//    ab.style.scale = "2 0.7"
  
    //random function
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        };   
    //Button Function
  function Lol(){
      a.a++;
    //stuff
       localStorage.setItem(a.a,a.a);
  
    if (a.a == 10){a.a = 0; a.b++;};

    switch (a.b){
      case 1:
       document.getElementById("B45").textContent = "Good Luck";
        
      break;
      
      default: 
        document.getElementById("B45").textContent = "Do not click!";
      break;
    };
    
      
    //switch
    if (a.b >= 1){
    switch (a.a){
        case 1:
            document.getElementById("P1").textContent = "1475 1846 358 300";
            alert("First is the most important"); 
        break;
        case 5:
            alert("Stop?");
        break;
        case 6:
        if (a.c < 1) {
            document.getElementById("B45").textContent = "Go away";
            document.getElementById("B45").disabled = true;
            
          };
        break; 
          case 0560:
          document.getElementById("B45").disabled = false;
            a.a = 0
          a.c++;
          break;
        case 10: 
       break;
    };
        
    };
};
    //idk yet
            window.onbeforeunload = function(){
                Looptest();
            };
            
      function Looptest(){
        switch (a.a){
            case 3:
               return;
            break;
            default: 
               localStorage.clear();
            break;
          };
      };
      
      
        function tester4(){
            let cords = {
              left1:getRandomInt(1004),
              right1:getRandomInt(1342),
              bottom1:getRandomInt(500),
              top1:getRandomInt(453)
            };
            if (a.b <== 1){
          document.getElementById("P1").textContent = cords.left1 +  " " + cords.right1 + " " + cords.top1 + " " + cords.bottom1;
          };
        };
        setInterval(tester4);

        

    //i wont let you

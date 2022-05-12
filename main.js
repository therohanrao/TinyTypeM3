window.onload=function(){

    onLoadEvent();

    document.getElementById("a").addEventListener("click", () =>{
        document.getElementById("buffer").value += "a";
        });
    
    document.getElementById("b").addEventListener("click", () =>{
        document.getElementById("buffer").value += "b";
        });
    
    document.getElementById("c").addEventListener("click", () =>{
        document.getElementById("buffer").value += "c";
        });
    document.getElementById("d").addEventListener("click", () =>{
        document.getElementById("buffer").value += "d";
        });
    
    document.getElementById("e").addEventListener("click", () =>{
        document.getElementById("buffer").value += "e";
        });
    
    document.getElementById("f").addEventListener("click", () =>{
        document.getElementById("buffer").value += "f";
        });
    document.getElementById("g").addEventListener("click", () =>{
        document.getElementById("buffer").value += "g";
        });
    
    document.getElementById("h").addEventListener("click", () =>{
        document.getElementById("buffer").value += "h";
        });
    
    document.getElementById("i").addEventListener("click", () =>{
        document.getElementById("buffer").value += "i";
        });
    document.getElementById("j").addEventListener("click", () =>{
        document.getElementById("buffer").value += "j";
        });
    
    document.getElementById("k").addEventListener("click", () =>{
        document.getElementById("buffer").value += "k";
        });
    
    document.getElementById("l").addEventListener("click", () =>{
        document.getElementById("buffer").value += "l";
        });
    document.getElementById("m").addEventListener("click", () =>{
        document.getElementById("buffer").value += "m";
        });
    
    document.getElementById("n").addEventListener("click", () =>{
        document.getElementById("buffer").value += "n";
        });
    
    document.getElementById("o").addEventListener("click", () =>{
        document.getElementById("buffer").value += "o";
        });
    document.getElementById("p").addEventListener("click", () =>{
        document.getElementById("buffer").value += "p";
        });
    
    document.getElementById("q").addEventListener("click", () =>{
        document.getElementById("buffer").value += "q";
        });
    
    document.getElementById("r").addEventListener("click", () =>{
        document.getElementById("buffer").value += "r";
        });
    document.getElementById("s").addEventListener("click", () =>{
        document.getElementById("buffer").value += "s";
        });
    
    document.getElementById("t").addEventListener("click", () =>{
        document.getElementById("buffer").value += "t";
        });
    
    document.getElementById("u").addEventListener("click", () =>{
        document.getElementById("buffer").value += "u";
        });
    document.getElementById("v").addEventListener("click", () =>{
        document.getElementById("buffer").value += "v";
        });
    
    document.getElementById("w").addEventListener("click", () =>{
        document.getElementById("buffer").value += "w";
        });
    
    document.getElementById("x").addEventListener("click", () =>{
        document.getElementById("buffer").value += "x";
        });

    document.getElementById("y").addEventListener("click", () =>{
        document.getElementById("buffer").value += "y";
        });
    
    document.getElementById("z").addEventListener("click", () =>{
        document.getElementById("buffer").value += "z";
        });

    document.getElementById("space").addEventListener("click", () =>{
        document.getElementById("buffer").value += " ";
        });
    
    document.getElementById("period").addEventListener("click", () =>{
        document.getElementById("buffer").value += ".";
        });
    document.getElementById("comma").addEventListener("click", () =>{
        document.getElementById("buffer").value += ",";
        });
    
    document.getElementById("emoji").addEventListener("click", () =>{
        var x = document.getElementById("scrollmenuid");
        var y = document.getElementById("myCanvas");
        var z = document.getElementById("canvasid2");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
          z.style.display = "none";
        } else {
          x.style.display = "none";
          y.style.display = "block";
          z.style.display = "block";
        }

        });

    document.getElementById("emoji2").addEventListener("click", () =>{
        var x = document.getElementById("scrollmenuid");
        var y = document.getElementById("myCanvas");
        var z = document.getElementById("canvasid2");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "block";
        }

        });

    document.getElementById("cambutton").addEventListener("click", () =>{
        var x = document.getElementById("scrollmenuid");
        var y = document.getElementById("camCanvas");
        var z = document.getElementById("output_canvas_div2");
        var a = document.getElementById("emojiguess");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
            a.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block"; //CHANGE THIS BACK TO BLOCXK
            z.style.display = "block";
            a.style.display = "block";
        }

        });


    document.getElementById("cambutton2").addEventListener("click", () =>{
        var x = document.getElementById("scrollmenuid");
        var y = document.getElementById("camCanvas");
        var z = document.getElementById("output_canvas_div2");
        var a = document.getElementById("emojiguess");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
            a.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "block";
            a.style.display = "block";
        }

        });



    
    document.getElementById("back").addEventListener("click", () =>{
        document.getElementById("buffer").value = document.getElementById("buffer").value.slice(0, document.getElementById("buffer").value.length - 1);
        });

    

  }




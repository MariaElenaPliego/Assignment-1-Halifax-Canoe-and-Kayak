window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }

        function myFunction2() {
          var x = document.getElementById("myMenu");
        if (x.style.visibility == "hidden") {
          x.style.visibility = "visible";
        } else {
          x.style.visibility = "hidden";
        }
        }
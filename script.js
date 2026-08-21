   const cvv2 = document.querySelector("#cvv2");
    const inp = document.querySelectorAll(".card>input");
    const h1 = document.querySelector("h1");
    inp.forEach((val, i) => {
      val.addEventListener("input", () => {
        if (val.value.length == 4) {
          if (i < 3) {
            val.nextElementSibling.focus();
          } else {
            cvv2.focus();
          }
        }

        if (val.value.length > 4) {
          val.value = val.value.slice(0, 4);
        }

        h1.innerText = "";
        inp.forEach((item, index) => {
          h1.innerText += item.value;


          if(index<3){
            h1.innerText+="-"
          }
        });
      });
    });
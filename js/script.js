let selectItems = document.querySelectorAll(".select");
// console.log(selectItems);

let pizzaItems = document.querySelectorAll(".main__container");
console.log(pizzaItems);





for (let i = 0; i < selectItems.length; i++) {
  let = selectItems[i];
  //   console.log(selectItems[i]);

  if (selectItems[i].textContent === "Chicken Pizza") {
    selectItems[i].classList.add("active");
  }
}

for (let p = 0; p < pizzaItems.length; p++) {
  let item = pizzaItems[p];
  // console.log(pizzaItems[p]);

  if (pizzaItems[p].classList.contains("chicken")) {
    pizzaItems[p].style.display = "flex";
  } else {
    pizzaItems[p].style.display = "none";
  }
}

for (let s = 0; s < selectItems.length; s++) {
  // console.log(selectItems[s]);
  let select = selectItems[s];
  selectItems[s].addEventListener("click", function () {
    // alert(`hello ${selectItems[s]}`);
    // selectItems[i].classList.te("active");
    // selectItems.textContent =` ${selectItems[s]}`;
    for (let l = 0; l < selectItems.length; l++) {
      // console.log(selectItems[l]);
      // select.classList.add("active");
      if (selectItems[l].classList.contains("active")) {
        selectItems[l].classList.remove("active");
      }
    }

    selectItems[s].classList.add("active");

    let filterName = selectItems[s].textContent;
    // console.log(filterName);

    if (filterName.toLowerCase() === "chicken pizza") {
      for (let p = 0; p < pizzaItems.length; p++) {
        console.log(p)
        if (pizzaItems[p].classList.contains("chicken")) {
          pizzaItems[p].style.display = "flex";
        } else {
          pizzaItems[p].style.display = "none";
        }
      }
    } else if (filterName.toLowerCase() === "pepperoni") {
      for (let p = 0; p < pizzaItems.length; p++) {
        console.log(pizzaItems[p]);
        if (pizzaItems[p].classList.contains("pepperoni")) {
          pizzaItems[p].style.display = "flex";
        } else {
          pizzaItems[p].style.display = "none";
        }
      }
    }
   else if (filterName.toLowerCase() === "margherita") {
    for (let p = 0; p < pizzaItems.length; p++) {
      console.log(pizzaItems[p]);
      if (pizzaItems[p].classList.contains("margherita")) {
        pizzaItems[p].style.display = "flex";
      } else {
        pizzaItems[p].style.display = "none";
      }
    }
  }
 else if (filterName.toLowerCase() === "hawaiian") {
  for (let p = 0; p < pizzaItems.length; p++) {
    console.log(pizzaItems[p]);
    if (pizzaItems[p].classList.contains("hawaiian")) {
      pizzaItems[p].style.display = "flex";
    } else {
      pizzaItems[p].style.display = "none";
    }
  }
}
 else if (filterName.toLowerCase() === "meat lover's pizza") {
  for (let p = 0; p < pizzaItems.length; p++) {
    console.log(pizzaItems[p]);
    if (pizzaItems[p].classList.contains("meat lover' s pizza")) {
      pizzaItems[p].style.display = "flex";
    } else {
      pizzaItems[p].style.display = "none";
    }
  }
}
  });
}

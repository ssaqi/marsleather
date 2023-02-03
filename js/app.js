
let products = {
  data: [
    {
      productName: "mars-022",
      category: "assemblyglove",
      image: "img/assembly/max1.jpg",
    },
    {
      productName: "mars-025",
      category: "assemblyglove",
      image: "img/assembly/max2.jpg",
    },
    {
      productName: "mars-050",
      category: "assemblyglove",
      image: "img/assembly/max3.jpg",
    },
    {
      productName: "mars-015",
      category: "assemblyglove",
      image: "img/assembly/max4.jpg",
    },
    {
      productName: "mars-058",
      category: "assemblyglov",
      image: "img/assembly/max5.jpg",
    },
    {
      productName: "mars-010",
      category: "assemblyglove",
      image: "img/assembly/max6.jpg",
    },
    {
      productName: "mars-045",
      category: "assemblyglove",
      image: "img/assembly/max7.jpg",
    },
    {
      productName: "mars-023",
      category: "assemblyglove",
      image: "img/assembly/max8.jpg",
    },
    {
      productName: "mars-020",
      category: "assemblyglove",
      image: "img/assembly/max9.jpg",
    },
    {
      productName: "mars-011",
      category: "assemblyglove",
      image: "img/assembly/max10.jpg",
    },
    {
      productName: "mars-099",
      category: "weldinggloves",
      image: "img/welding/talenokay2.jpg",
    },
    {
      productName: "mars-094",
      category: "drivergloves",
      image: "img/driver/driver2.jpg",
    },
    {
      productName: "mars-048",
      category: "driverglove",
      image: "img/driver/driver1.jpg",
    },
    {
      productName: "mars-028",
      category: "drivergloves",
      image: "img/driver/driver2.jpg",
    },
    {
      productName: "mars-030",
      category: "driverglove",
      image: "img/driver/driver4.jpg",
    },
    {
      productName: "mars-168",
      category: "driverglove",
      image: "img/driver/driver5.jpg",
    }, 
    {
      productName: "mars-030",
      category: "weldinggloves",
      image: "img/welding/talenokay1.jpg",
    },
  
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  // let price = document.createElement("h6");
  // price.innerText = "$" + i.price;
  // container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};




// function pri(){

//     var price = document.getElementById("price");
//     price.innerHTML = "$345";
//     price.style.color = "white"
// }




carouselImageCar = document.getElementById("carouselImageCars");
carouselInfoCar = document.getElementById("carouselInfoCars");
carouselImageBike = document.getElementById("carouselImageBikes");
carouselInfoBike = document.getElementById("carouselInfoBikes");
menuButton = document.getElementById("menuButton");
dropdownContainer = document.getElementById("dropdownContainer");

dialogue = document.getElementById("dialogue");
kupovina = document.getElementById("kupovina");
zatvori = document.getElementById("zatvori");

var counter = 0
kupovina.addEventListener("click", changeVisibility);
zatvori.addEventListener("click", changeVisibility);
menuButton.addEventListener("click", displayDropdownToggle);

/*
U sustini bilo bi potrebno realizovati fetch API koji bi poslao HTTP zahtev serveru za informacijama i primio ih kroz JSON.
Umesto toga, koristicemo pseudopodatke.
*/

cars = [
    {
        producer: "Fiat",
        type: "something",
        year: "2010",
        mileage: "1000",
        price: "8000€",
        imgSource: "images/fiat.jpg"
    },
    {
        producer: "Mercedes",
        type: "something",
        year: "2015",
        mileage: "2000",
        price: "15000€",
        imgSource: "images/mercedes.jpeg"
    },
    {
        producer: "Volkswagen",
        type: "something",
        year: "2012",
        mileage: "3000",
        price: "10000€",
        imgSource: "images/volkswagen2.jpg"
    },
]

bikes = [
    {
        producer: "Yamaha",
        type: "something",
        year: "2010",
        mileage: "1000",
        price: "2000€",
        imgSource: "images/bike1.jpg"
    },
    {
        producer: "Suzuki",
        type: "something",
        year: "2015",
        mileage: "2000",
        price: "1500€",
        imgSource: "images/bike2.jpg"
    },
    {
        producer: "Harley Davidson",
        type: "something",
        year: "2012",
        mileage: "3000",
        price: "1000€",
        imgSource: "images/bike3.jpg"
    },
]

changeImage();

function changeImage()
{
    if(counter > 2)
    {
        counter = 0;
    }
    carouselInfoCar.innerHTML = "Proizvođač: " + cars[counter].producer + "<br />" + 
    "Tip: " + cars[counter].type + "<br />" +
    "Godište: " + cars[counter].year + "<br />" +
    "Kilometraža: " + cars[counter].mileage + "<br />" +
    "Cena: " + cars[counter].price;
    carouselImageCar.src = cars[counter].imgSource;

    carouselInfoBike.innerHTML = "Proizvođač: " + bikes[counter].producer + "<br />" + 
    "Tip: " + bikes[counter].type + "<br />" +
    "Godište: " + bikes[counter].year + "<br />" +
    "Kilometraža: " + bikes[counter].mileage + "<br />" +
    "Cena: " + bikes[counter].price;
    carouselImageBike.src = bikes[counter].imgSource;

    counter++;

    setTimeout(changeImage, 6000);
}

function changeVisibility()
{
    if(dialogue.style.display === "block")
    {
        dialogue.style.display = "none";
    }else
    {
        dialogue.style.display = "block";
    }
}

function displayDropdownToggle()
{
    if(dropdownContainer.style.display === "block")
    {
        dropdownContainer.style.display = "none";
    }else
    {
        dropdownContainer.style.display = "block";
    }
}
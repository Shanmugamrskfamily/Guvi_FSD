async function fetchdata() {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    return data;
  }

  async function weatherData(id) {
    let country = await fetchdata();
    let cityName = country[id].name.common;
    let apiKey = "d92e3b7365d2e22d7605e9aeb27c267e";
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
    );
    let data = await response.json();
    return data;
  }

  let outerDiv = document.createElement("div");
  outerDiv.setAttribute("class", "container-fluid mt-2 bg-warning");

  let row1 = document.createElement("div");
  row1.setAttribute(
    "class",
    "row justify-content-center bg-success fs-1",
  );
  row1.setAttribute("style", "color:white;font-weight:bold");
  row1.textContent = "RestCountries Weather Details";

  let row2 = document.createElement("div");
  row2.setAttribute("class", "row justify-content-center");
  row2.setAttribute("style", "background-color: rgb(119, 155, 155)");

  getCards();

  document.body.prepend(outerDiv);
  outerDiv.append(row1, row2);

  async function createCards(id) {
    let content = await fetchdata();
    let name = content[id].name.common;
    let capital = content[id].capital;
    let region = content[id].region;
    let latitude = content[id].latlng[0];
    let longitude = content[id].latlng[1];
    let countryCode = content[id].cca3;

    let flag = content[id].cca2;

    let colDiv = document.createElement("div");
    colDiv.setAttribute(
      "style",
      "background-color: rgb(119, 155, 155)",
    );
    colDiv.setAttribute(
      "class",
      "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-4 mb-3 justify-content-center",
    );

    let card = document.createElement("div");
    card.setAttribute("class", "card m-3");

    let cardHeader = document.createElement("h4");
    cardHeader.setAttribute(
      "class",
      "card-header mt-2 bg-primary text-white text-center fs-3",
    );
    cardHeader.textContent = name;

    let cardBody = document.createElement("div");
    cardBody.setAttribute(
      "style",
      "background-image: linear-gradient(green, yellow)",
    );
    cardBody.setAttribute(
      "class",
      "card-body text-center fs-4 fw-bold",
    );

    let image = document.createElement("img");
    image.setAttribute("class", "card-img");
    image.setAttribute("style", "height:12rem");
    image.setAttribute("style", "border:2px solid black");
    image.setAttribute(
      "src",
      `https://flagcdn.com/w320/${flag.toLowerCase()}.png`,
    );
    image.setAttribute("alt", "flag");

    let details = document.createElement("div");
    details.setAttribute("class", "fs-5 mt-3");
    details.innerHTML = `Capital : ${capital}<br>`;
    details.innerHTML += "------------------------<br>";
    details.innerHTML += `Region : ${region}<br>`;
    details.innerHTML += "------------------------<br>";
    details.innerHTML += `Latitude : ${latitude}, Longitude : ${longitude}<br>`;
    details.innerHTML += "------------------------<br>";
    details.innerHTML += `Country code : ${countryCode}<br>`;

    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary mt-3 fs-5 fw-bold");
    button.textContent = "Click for Weather";
    button.onclick = async function () {
      let w_data = await weatherData(id);
      let temp = w_data.main.temp;
      let pressure = w_data.main.pressure;
      let humidity = w_data.main.humidity;
      let w_speed = w_data.wind.speed;

      let alert = document.createElement("div");
      alert.setAttribute(
        "style",
        "background-image: linear-gradient(green, yellow)",
      );
      alert.setAttribute("style", "color:White");

      let head = document.createElement("h3");
      head.innerHTML = "Weather Details";

      let list = document.createElement("p");
      list.innerHTML += `Temprature : ${temp - 273.15}&deg;C<br>`;
      list.innerHTML += `Pressure : ${pressure}<br>`;
      list.innerHTML += `Humidity : ${humidity}<br>`;
      list.innerHTML += `Wind Speed : ${w_speed}<br>`;

      let button1 = document.createElement("button");
      button1.classList.add("btn", "btn-primary");
      button1.innerText = "Go Back";
      button1.onclick = function () {
        cardBody.removeChild(alert);
        cardBody.append(image, details);
      };

      alert.append(head, list, button1);
      cardBody.removeChild(details);
      cardBody.removeChild(image);
      cardBody.appendChild(alert);
    };

    colDiv.appendChild(card);
    card.append(cardHeader, cardBody);
    cardBody.append(image, details);
    details.appendChild(button);
    row2.append(colDiv);
  }

  async function getCards() {
    for (let i = 0; i < 250; i++) {
      await createCards(i);
    }
  }
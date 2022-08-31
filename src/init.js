const Init = () => {
  const container = document.querySelector(".container");
  const main = document.createElement("div");
  const weatherCard = document.createElement("div");
  const searchBar = document.createElement("div");
  const searchInput = document.createElement("input");
  const header = document.createElement("div");
  const footer = document.createElement("div");
  main.classList.add("main");
  weatherCard.classList.add("weathercard");
  searchBar.classList.add("searchbar");
  searchInput.classList.add("searchinput");
  header.classList.add("header");
  footer.classList.add("footer");
  header.textContent = "Weather";
  footer.textContent = "Nhan Nguyen | The Odin Project";
  searchInput.title = "Location";
  searchBar.appendChild(searchInput);
  main.appendChild(header);
  main.appendChild(searchBar);
  main.appendChild(weatherCard);
  main.appendChild(footer);
  container.appendChild(main);

  return container;
}

module.exports = Init;
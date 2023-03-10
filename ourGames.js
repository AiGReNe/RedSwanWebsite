// alert("FILE IS CONNECTED!")


const items = [
    {
      name: "XOXO",
      players: 2,
      description: "Get three in a row.",
      imageUrl: "../images/ticTacToe.jpg",
    },
    {
      name: "Farkle",
      players: 4,
      description: "Be the first to 10,000.",
      imageUrl: "../images/farkle.jpg",
    },
    {
      name: "Snake Maze Mobile...Coming Soon.",
      players: 1,
      description: "Currently in the making...",
      imageUrl: "../images/snakeMaze.avif",
    },
  ];
  
  function displayItems() {
    const listing = document.getElementById("pageListing");
    listing.innerHTML = "";
    items.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="listing">
        <div class="listing-img">
          <img src="${item.imageUrl}" alt="Item for Sale">
          <div class="listing-details">
            <h3>${item.name}</h3>
            <p>Players: ${item.players}</p>
            <p>Description: ${item.description}</p>
            <a href="https://www.google.com/">Play</a>
            </div>
          </div>
        </div>
      `;
      listing.appendChild(div);
    });
  }
  
  window.addEventListener("load", () => {
    displayItems();
  });

  
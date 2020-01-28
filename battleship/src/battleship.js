let view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");

  }
}

let model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] }, { locations: ["24", "34", "44"], hits: ["", "", ""] }, { locations: ["10", "11", "12"], hits: ["", "", ""] }],
  fire: function (guess) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      if (index >= 0) {
        // We have a hit! }
        console.log("We have a hit")
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
      };
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.");
    return false;
  },
  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
  }
}

view.displayMessage("Does it work?")
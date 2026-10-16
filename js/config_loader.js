var Goal;
var TILE_IMAGES = {};
var SHOW_NUMBERS_ON_IMAGES = false;

function loadConfig(path, onLoad) {
  fetch(path, { cache: "no-cache" })
    .then(function (response) {
      if (!response.ok) throw new Error("Could not load " + path + " (HTTP " + response.status + ")");
      return response.text();
    })
    .then(function (text) {
      var config = jsyaml.load(text) || {};
      var tiles  = config.tiles;

      if (!Array.isArray(tiles) || tiles.length === 0) {
        throw new Error(path + " needs a non-empty \"tiles\" list");
      }

      // Entry i is the tile with value 2^(i+1); the last entry is the winning tile.
      tiles.forEach(function (image, i) {
        if (image) TILE_IMAGES[Math.pow(2, i + 1)] = String(image);
      });
      Goal = Math.pow(2, tiles.length);
      SHOW_NUMBERS_ON_IMAGES = !!config.show_numbers_on_images;

      var title = config.title != null ? String(config.title) : String(Goal);
      document.title = title;
      document.querySelector(".title").textContent = title;

      onLoad();
    })
    .catch(function (error) {
      document.querySelector(".game-intro").textContent = "Config error: " + error.message;
    });
}

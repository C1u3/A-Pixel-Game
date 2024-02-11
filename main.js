import { gridCells } from "./src/helpers/grid.js";
import { Hero } from "./src/objects/Hero/Hero.js";
import { Camera } from "./src/Camera.js";
import { GameLoop } from "./src/GameLoop.js";
import { GameObject } from "./src/GameObject.js";
import { Input } from "./src/Input.js";
import { resources } from "./src/Resource.js"; 
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";

// Grabbing canvas to draw
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

// Establish root scene
const mainScene = new GameObject({
  position: new Vector2(0, 0),
});

// Adding sky, ground and hero to scene
const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
});

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
});
mainScene.addChild(groundSprite);

const hero = new Hero(gridCells(6), gridCells(5));
mainScene.addChild(hero);

const camera = new Camera();
mainScene.addChild(camera);

// Adding input class to scene
mainScene.input = new Input();

// Establish update and draw loops
const update = (delta) => {
  mainScene.stepEntry(delta, mainScene)
}
const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  skySprite.drawImage(ctx, 0, 0);

  ctx.save();

  // Offset by camera position
  ctx.translate(camera.position.x, camera.position.y);

  // Draw objects
  mainScene.draw(ctx, 0, 0);

  ctx.restore();
}

// Starting the game
const gameLoop = new GameLoop(update, draw);
gameLoop.start();
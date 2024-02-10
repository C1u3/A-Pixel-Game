import { resources } from "./src/Resource.js";
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";
import { GameLoop } from "./src/GameLoop.js";
import { UP, DOWN, LEFT, RIGHT, Input } from "./src/Input.js";
import { gridCells, isSpaceFree } from "./src/helpers/grid.js";
import { moveTowards } from "./src/helpers/moveTowards.js";
import { walls } from "./src/levels/level1.js";
import { Animations } from "./src/Animations.js";
import { FrameIndexPattern } from "./src/FrameIndexPattern.js";
import { WALK_UP, WALK_DOWN, WALK_LEFT, WALK_RIGHT, STAND_UP, STAND_DOWN, STAND_LEFT, STAND_RIGHT } from "./src/objects/Hero/heroAnimations.js";
import { GameObject } from "./src/GameObject.js";
import { Hero } from "./src/objects/Hero/Hero.js";

// Grabbing canvas to draw
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

// Establish Root Scene
const mainScene = new GameObject({
  position: new Vector2(0, 0),
});

// Adding sky, ground and hero to scene
const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
});
mainScene.addChild(skySprite);

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
});
mainScene.addChild(groundSprite);

const hero = new Hero(gridCells(6), gridCells(5));
mainScene.addChild(hero);

// Adding input class to scene
mainScene.input = new Input();

// Establish update and draw loops
const update = (delta) => {
  mainScene.stepEntry(delta, mainScene)
}
const draw = () => {
  mainScene.draw(ctx, 0, 0);
}

// Starting the game
const gameLoop = new GameLoop(update, draw);
gameLoop.start();
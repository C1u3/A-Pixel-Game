import { events } from "./Event.js"
import { GameObject } from "./GameObject.js";
import { Vector2 } from "./Vector2.js";

export class Camera extends GameObject {
  constructor() {
    super({});

    events.on("HERO_POSITION", this, heroPosition => {
      const heroHalf = 8;
      const canvasWidth = 320;
      const canvasHeight = 180;
      const halfWidth = -heroHalf + canvasWidth / 2;
      const halfHeight = -heroHalf + canvasHeight / 2;
      
      this.position = new Vector2(
        -heroPosition.x + halfWidth,
        -heroPosition.y + halfHeight,
      )
    });
  }
}
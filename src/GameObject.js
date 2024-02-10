import { Vector2 } from "./Vector2";

export class GameObject {
  constructor({ position }) {
    this.position = position ?? new Vector2(0, 0);
    this.children = [];
  }

  step(delta) {
    
  }
}
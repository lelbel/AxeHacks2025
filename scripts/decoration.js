import Room from './room.js';

//  class that creates decoration objects
export default class Decoration {
    constructor(name, price, type, sprite) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.sprite = sprite;
    }

    // getter for the decoration name
    getName() {
        return this.name;
    }

    // getter for the decoration price
    getPrice() {
        return this.price;
    }

    // getter for the decoration type
    getType() {
        return this.type;
    }

    // getter for the decoration image
    getSprite() {
        return this.sprite;
    }
}

//  TESTING
//const desk = new Decoration ("Cool Desk", 10, "Desk", "desk.png");
//document.getElementById("test").innerHTML = "test name: " + desk.getName() + desk.getPrice() + desk.getType();
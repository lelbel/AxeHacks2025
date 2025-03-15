import Decoration from './decoration.js';

// class that creates the room the user is decorating and tracks their customizations
export default class Room {
    constructor() {
        // list of all owned room objects
        this.ownedDecorations = [];

        // room decoration
        this.mat = null;
        this.flowerDisplay = null;
        this.largeRug = null;
        this.counter = null;
        this.bookshelf = null;
        this.plant1 = null;
        this.plant2 = null;
        this.plant3 = null;
    }

    //---------GETTERS---------
    getMat() {
        return this.mat;
    }

    getFlowerDisplay() {
        return this.flowerDisplay;
    }

    getLargeRug() {
        return this.largeRug;
    }

    getCounter() {
        return this.counter;
    }

    getBookshelf() {
        return this.bookshelf;
    }

    getPlant1() {
        return this.plant1;
    }

    getPlant2() {
        return this.plant2;
    }

    getPlant3() {
        return this.plant3;
    }

    //---------IMAGE VISIBILITY---------
    showMat() {
        this.appendDecorationImage(this.getMat().getSprite(), "Mat", "mat");
    }

    showFlowerDisplay() {
        this.appendDecorationImage(this.getFlowerDisplay().getSprite(), "Flower Display", "flower-display");
    }

    showLargeRug() {
        this.appendDecorationImage(this.getLargeRug().getSprite(), "Large Rug", "large-rug");
    }

    showCounter() {
        this.appendDecorationImage(this.getCounter().getSprite(), "Counter", "counter");
    }

    showBookshelf() {
        this.appendDecorationImage(this.getBookshelf().getSprite(), "Bookshelf", "bookshelf");
    }

    showPlant1() {
        this.appendDecorationImage(this.getPlant1().getSprite(), "Plant 1", "plant-1");
    }

    showPlant2() {
        this.appendDecorationImage(this.getPlant2().getSprite(), "Plant 2", "plant-2");
    }

    showPlant3() {
        this.appendDecorationImage(this.getPlant3().getSprite(), "Plant 3", "plant-3");
    }

    appendDecorationImage(sprite, altText, id) {
        const roomElement = document.getElementById("room");
        if (!roomElement) {
            console.error("Error: Room element not found in the DOM.");
            return;
        }

        // Remove existing decoration if it exists
        const existingDecoration = document.getElementById(id);
        if (existingDecoration) existingDecoration.remove();

        // Create new image element
        const img = document.createElement('img');
        img.src = `/decorations/${sprite}`;
        img.alt = altText;
        img.id = id;
        roomElement.appendChild(img);
    }

    //---------DECORATION METHODS---------
    addDecoration(decoration) {
        this.ownedDecorations.push(decoration);
        this.setDecoration(decoration);
    }

    getOwnedDecorations() {
        return this.ownedDecorations;
    }

    setDecoration(decoration) {
        switch (decoration.getType()) {
            case "Mat":
                this.mat = decoration;
                this.showMat();
                break;
            case "Flower Display":
                this.flowerDisplay = decoration;
                this.showFlowerDisplay();
                break;
            case "Large Rug":
                this.largeRug = decoration;
                this.showLargeRug();
                break;
            case "Counter":
                this.counter = decoration;
                this.showCounter();
                break;
            case "Bookshelf":
                this.bookshelf = decoration;
                this.showBookshelf();
                break;
            case "Plant 1":
                this.plant1 = decoration;
                this.showPlant1();
            case "Plant 2":
                this.plant2 = decoration;
                this.showPlant2();
            case "Plant 3":
                this.plant3 = decoration;
                this.showPlant3();
            default:
                console.log("Decoration type not found");
        }
    }
}

// Ensure DOM is ready before modifying it
document.addEventListener("DOMContentLoaded", () => {
    const room = new Room();

    const welcomeMat = new Decoration("Welcome Mat", 10, "Mat", "welcomeMatHello.png");
    const flowerDisplay = new Decoration("Flower Display", 5, "Flower Display", "flowerDisplay.png");
    const largeRug = new Decoration("Large Rug", 5, "Large Rug", "largeRug.png");
    const counter = new Decoration("Counter", 5, "Counter", "counter.png");
    const bookshelf = new Decoration("Bookshelf", 5, "Bookshelf", "bookshelf.png");
    const plant1 = new Decoration("Plant 1", 5, "Plant 1", "plant1.png");
    const plant2 = new Decoration("Plant 2", 5, "Plant 2", "plant2.png");
    const plant3 = new Decoration("Plant 3", 5, "Plant 3", "plant3.png");

    function addDecoration(num) {
        switch (num) {
            case 1:
                room.addDecoration(welcomeMat);
                break;
            case 2:
                room.addDecoration(flowerDisplay);
                break;
            case 3:
                room.addDecoration(largeRug);
                break;
            case 4:
                room.addDecoration(counter);
                break;
            case 5:
                room.addDecoration(bookshelf);
                break;
            case 6:
                room.addDecoration(plant1);
                break;
            case 7:
                room.addDecoration(plant2);
                break;
            case 8:
                room.addDecoration(plant3);
                break;
            default:
                console.log("Invalid selection.");
        }
    }

    //addDecoration(1);
    //addDecoration(2);
    //addDecoration(3);
    //addDecoration(4);
    //addDecoration(5);
    //addDecoration(6);
    //addDecoration(7);
    //addDecoration(8);
});

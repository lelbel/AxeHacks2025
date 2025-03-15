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
    }


    //---------GETTERS---------
    // getter for room mat
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


    //---------IMAGE VISIBILITY---------
    showMat() {
        const matImg = document.createElement('img');
        matImg.src = `/decorations/${this.getMat().getSprite()}`;
        matImg.alt = "Mat";
        matImg.id = "mat";
        document.getElementById("room").append(matImg);
    }
    
    showFlowerDisplay() {
        const flowerDisplayImg = document.createElement('img');
        flowerDisplayImg.src = `/decorations/${this.getFlowerDisplay().getSprite()}`;
        flowerDisplayImg.alt = "Flower Display";
        flowerDisplayImg.id = "flower-display";
        document.getElementById("room").appendChild(flowerDisplayImg);
    }

    showLargeRug() {
        const largeRugImg = document.createElement('img');
        largeRugImg.src = `/decorations/${this.getLargeRug().getSprite()}`;
        largeRugImg.alt = "Large Rug";
        largeRugImg.id = "large-rug";
        document.getElementById("room").appendChild(largeRugImg);
    }

    showCounter() {
        const counterImg = document.createElement('img');
        counterImg.src = `/decorations/${this.getCounter().getSprite()}`;
        counterImg.alt = "Counter";
        counterImg.id = "counter";
        document.getElementById("room").appendChild(counterImg);
    }


    //---------DECORATION METHODS---------
    // add a decoration to the array of owned decorations
    addDecoration(decoration) {
        this.ownedDecorations.push(decoration);

        // set added decoration as current decoration
        this.setDecoration(decoration);
    }

    // get array of owned decorations
    getOwnedDecorations() {
        return this.ownedDecorations;
    }

    // add or swap out a decoration in the room
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

            default:
                console.log("Decoration type not found");
        }
    }
}

// TESTING
const room = new Room();

const welcomeMat = new Decoration("Welcome Mat", 10, "Mat", "welcomeMatHello.png");
const flowerDisplay = new Decoration("Flower Display", 5, "Flower Display", "flowerDisplay.png");
const largeRug = new Decoration("Large Rug", 5, "Large Rug", "largeRug.png");
const counter = new Decoration("Counter", 5, "Counter", "counter.png");

room.addDecoration(welcomeMat);
room.addDecoration(flowerDisplay);
room.addDecoration(largeRug);
room.addDecoration(counter)
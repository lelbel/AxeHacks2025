import Decoration from './decoration.js';

// class that creates the room the user is decoration and tracks their customizations
export default class Room {
    constructor() {
        //  list of all owned room objects
        this.ownedDecorations = [];

        //  current room decoration
        this.mat;
        this.flowerDisplay;
    }

    //  add a decoration to the array of owned decorations
    addOwnedDecoration(decoration) {
        this.ownedDecorations.push(decoration);

        //set added decoration as current decoration
        this.setDecoration(decoration);
    }

    //  get array of owned decorations
    getOwnedDecorations() {
        return this.ownedDecorations;
    }

    //  add or swap out a decoration in the room
    setDecoration(decoration) {
        switch(decoration.getType()) {
            case "Mat":
                this.mat = decoration;
                break;

            case "Flower Display":
                this.flowerDisplay = decoration;
                break;
            
            default:
                console.log("decoration type not found");
        }
    }

    //---------GETTERS AND SETTERS---------
    //  getter for room mat
    getMat() {
        return this.mat.getSprite();
    }

    getFlowerDisplay() {
        return this.flowerDisplay;
    }
}

//TESTING
const room = new Room();
const welcomeMatHello = new Decoration("Welcome Mat Hello", 10, "Mat", "welcomeMatHello.png");
const welcomeMatBlank = new Decoration("Welcome Mat Blank", 5, "Mat", "welcomeMatBlank.png");
const flowerDisplay = new Decoration("Flower Display", 5, "Flower Display", "flowerDisplay.png");

room.addOwnedDecoration(welcomeMatHello);
room.addOwnedDecoration(welcomeMatBlank);
room.addOwnedDecoration(flowerDisplay);

document.getElementById("test").innerHTML = (room.getOwnedDecorations()[0].getName());

document.getElementById("room").innerHTML = 
    `
    <img src="/decorations/background.png" alt="Room Background" id="room-background">
    <img src="/decorations/${room.getMat()}" id="welcome-mat"/>
    <img src="/decorations/${room.getFlowerDisplay()}" id="welcome-mat"/>
    `
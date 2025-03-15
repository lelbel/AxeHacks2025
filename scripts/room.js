import Decoration from './decoration.js';

// class that creates the room the user is decoration and tracks their customizations
export default class Room {
    constructor() {
        //list of all owned room objects
        this.ownedDecorations = [];

        //list of current objects being displayed
        this.currentDecorations = [];
    }

    //  add a decoration to the array of owned decorations
    addOwnedDecoration(decoration) {
        this.ownedDecorations.push(decoration);
    }

    //  get array of owned decorations
    getOwnedDecorations() {
        return this.ownedDecorations;
    }

    //  update array of current decorations
    addOwnedDecoration(decoration) {
        for (let i = 0; this.currentDecorations.length; i++) {
            if (this.currentDecorations[i].getType() == decoration.getType()) {
                this.currentDecorations[i] = decoration;
                return;
            }
        }
        this.currentDecorations.push(decoration);
    }

    //  get array of current decorations
    getOwnedDecorations() {
        return this.ownedDecorations;
    }

    //  iterate through a list of object positions and determine where the object should go
    placeDecoration(decoration) {
        //  if decoration is window
        if (decoration.type == "Window") {
            this.window = decoration;
        }
    }

    //setter for room window
    setRoomWindow(window) {
        this.window = window;
    }

    //getter for room window
    getRoomWindow() {
        return this.window;
    }

}

//TESTING
const room = new Room();
const table = new Decoration("table", 10, "table", "img");

room.addOwnedDecoration(table);
document.getElementById("test").innerHTML = room.getOwnedDecorations();
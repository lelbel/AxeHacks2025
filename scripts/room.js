import Decoration from './decoration.js';

// class that creates the room the user is decoration and tracks their customizations
export default class Room {
    constructor() {
        //list of all room objects
        this.ownedDecorations = [];
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
        for (displayedDecoration in this.currentDecorations) {
            if (displayedDecoration.decorType() == decoration.decorType()) {
                currentDecorations[displayedDecoration] = decoration;
                return;
            }
        }

        this.current.push(decoration);
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
//document.getElementById("test").innerHTML = room.getOwnedDecorations;
const table = new Decoration("table", 10, "table", "img");
class Task {
    constructor(name, date, points){
        this._name = name;
        this._date = new Date(date);
        this._points = Number(points);
        this._status = false;

    }

    get taskName(){
        return this._name;
    }
    set taskName(value){
        this._name = value;
    }

    get date(){
        return this._date;
    }
    set date(value){
        this._date = value;
    }

    get points(){
        return this._points;
    }
    set points(value){
        this._points = value;
    }
}
class TaskManager{
    constructor(){
        this.taskList = [];
    }

    addTask(name, date, points){
        let task = new Task(name, date, points);
        this.taskList.push(task);
        this.displayTasks();
    }
    
    deleteTask(){
        
    }

    displayStatus(){

    }

    toggleStatus(){

    }

    displayTasks(){

    }
    
}

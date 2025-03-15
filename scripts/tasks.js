class Task {
    //constructor for tasks
    constructor(name, date, points){
        this._name = name;
        this._date = new Date(date);
        this._points = Number(points);
        this._status = false;

    }
//getters and setters for task attributes
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
//separate class to manage tasks in task list (array)
class TaskManager{
    constructor(){
        this.taskList = [];
    }

//add another task to list
    addTask(name, date, points){
        let task = new Task(name, date, points);
        this.taskList.push(task);
        this.displayTasks();
    }
    
//delete task from list
    deleteTask(){
        
    }

//display status of task
    displayStatus(){

    }

//change the status of the task
    toggleStatus(){

    }

//display all tasks in task list
    displayTasks(){

    }
    
}

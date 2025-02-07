interface myTodoInterface{
    myTasks: Array<string>;
    addTask(task: string): number;
    listAllTasks():void;
    deleteTask(task:String)

}

class Todo implements myTodoInterface{
    myTasks: string[] =[];

        //addTask() add tasks that takes a string as a parameter, adds a task using push
        //and returns the number of tasks
        addTask(task:string): number {
        this.myTasks.push(task);
        console.log(task + " has been added to my tasks");
        return this.myTasks.length;
        }

        //listAllTasks() displays the current tasks logged
        listAllTasks():void{
            this.myTasks.forEach(function(element){
                console.log("Item: "+ element + " is on my Tasks list.");
            });
        }

        //deleteTask() uses splice to take away a task
        deleteTask(task:string){
        let index:number = this.myTasks.indexOf(task); 
        if (index > -1)
        {
            this.myTasks.splice(index, 1);
            console.log("Item "+ task + "has been removed from my tasks list");
        }

        else {
            console.log("item: " +task+" is NOT in my tasks list")
        }
        return this.myTasks.length;
    }
}

//sending in variables to the interface
let myTodo = new Todo();
myTodo.addTask("Work");
myTodo.addTask("Eat");
myTodo.listAllTasks();
myTodo.deleteTask("Eat");
myTodo.deleteTask("Stuff");
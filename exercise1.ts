//creating a string array
let myTasks:Array<String> =[];

//addTask() add tasks that takes a string as a parameter, adds a task using push
//and returns the number of tasks
function addTask(task:String):number{
myTasks.push(task);
console.log(task+ " has been added to my tasks");
return myTasks.length;
}

//listAllTasks() displays the current tasks logged
function listAllTasks():void{
    myTasks.forEach(function(element){
        console.log("Item: "+ element + " is on my Tasks list.");
    });
}

//deleteTask() uses splice to take away a task
function deleteTask(task:string){
    let index:number = myTasks.indexOf(task); 
    if (index > -1)
    {
        myTasks.splice(index, 1);
        console.log("Item "+ task + "has been removed from my tasks list");
    }
    else {
        console.log("item: " +task+" is NOT in my tasks list")
    }
    return myTasks.length;
}

//sending in variables
addTask("Work");
addTask("Eat");
listAllTasks();
deleteTask("Stuff");
deleteTask("Work");
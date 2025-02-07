var Todo = /** @class */ (function () {
    function Todo() {
        this.myTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTasks.push(task);
        console.log(task + " has been added to my tasks");
        return this.myTasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.myTasks.forEach(function (element) {
            console.log("Item: " + element + " is on my Tasks list.");
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("Item " + task + "has been removed from my tasks list");
        }
        else {
            console.log("item: " + task + " is NOT in my tasks list");
        }
        return this.myTasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Work");
myTodo.addTask("Eat");
myTodo.listAllTasks();
myTodo.deleteTask("Eat");
myTodo.deleteTask("Stuff");

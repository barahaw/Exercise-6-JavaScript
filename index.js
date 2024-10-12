const displayMenu = () => {
  return `
1. Add a new task
2. View all tasks
3. Toggle task completion status
4. Remove a task
5. Update Task
6. Search tasks by name
7. Exit`;
};

const taskManager = () => {
  const tasks = [];
  let index = 1;
  let run = true;
  while (run) {
    let choice = prompt(displayMenu());
    switch (choice) {
      case "1": {
        const addNewTask = (description) => {
          const task = {
            id: index,
            description: description,
            completed: false,
          };
          tasks.push(task);
          index++;
          console.log(
            `Task added: ID: ${task.id}, Description: ${description}, Completed: No`
          );
        };

        const description = prompt("Enter task description: ");
        addNewTask(description);
        break;
      }
      case "2": {
        const viewAllTasks = () => {
          if (tasks.length === 0) {
            console.log("No tasks found");
          } else {
            tasks.forEach((task) => {
              console.log(
                `ID: ${task.id}, Description: ${task.description}, Completed: ${
                  task.completed ? "Yes" : "No"
                }`
              );
            });
          }
        };

        viewAllTasks();
        break;
      }
      case "3": {
        const toggleTaskCompletion = (id) => {
          const task = tasks.find((task) => task.id === parseInt(id));
          if (task) {
            task.completed = !task.completed;
            console.log(
              `Task ${id} completion status toggled to ${
                task.completed ? "Completed" : "Not Completed"
              }`
            );
          } else {
            console.log(`Task with ID ${id} not found.`);
          }
        };

        const toggleId = prompt("Enter task ID to toggle: ");
        toggleTaskCompletion(toggleId);

        break;
      }
      case "4": {
        const removeTask = (id) => {
          const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
          if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            console.log(`Task with ID ${id} has been removed.`);
          } else {
            console.log(`Task with ID ${id} not found.`);
          }
        };

        const removeId = prompt("Enter task ID to remove: ");
        removeTask(removeId);

        break;
      }
      case "5": {
        const updateTask = (id, newDescription) => {
          const task = tasks.find((task) => task.id === parseInt(id));
          if (task) {
            task.description = newDescription;
            console.log(`Task with ID ${id} has been updated.`);
          } else {
            console.log(`Task with ID ${id} not found.`);
          }
        };

        const updateId = prompt("Enter task ID to update: ");
        const newDescription = prompt("Enter new description: ");
        updateTask(updateId, newDescription);

        break;
      }
      case "6": {
        const search = (searchTerm) => {
          const filteredTasks = tasks.filter((task) =>
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredTasks.length > 0) {
            filteredTasks.forEach((task) => {
              console.log(
                `ID: ${task.id}, Description: ${task.description}, Completed: ${
                  task.completed ? "Yes" : "No"
                }`
              );
            });
          } else {
            console.log("No tasks found matching the search term.");
          }
        };

        const searchTerm = prompt("Enter task name to search: ");
        search(searchTerm);

        break;
      }
      case "7": {
        run = false;
        break;
      }
      default: {
        console.log("Invalid choice, please try again.");
      }
    }
  }
};

taskManager();

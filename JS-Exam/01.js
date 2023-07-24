function solve(input) {
    let n = Number(input[0]);
    const sprints = {};
  
    class Sprint {
      constructor(taskId, title, status, estimatedPoints) {
        this.taskId = taskId;
        this.title = title;
        this.status = status;
        this.estimatedPoints = estimatedPoints;
      }
    }
  
    for (let i = 1; i <= n; i++) {
      let [name, taskId, title, status, estimatedPoints] = input[i].split(':');
      if (!sprints[name]) {
        sprints[name] = [];
      }
      const sprint = new Sprint(taskId, title, status, Number(estimatedPoints));
      sprints[name].push(sprint);
    }
  
    // Calculate initial points for each status
    let toDoTasksTotalPoints = 0;
    let inProgressTasksTotalPoints = 0;
    let codeReviewTasksTotalPoints = 0;
    let doneTasksTotalPoints = 0;
  
    for (const assigneeTasks of Object.values(sprints)) {
      for (const task of assigneeTasks) {
        switch (task.status) {
          case 'ToDo':
            toDoTasksTotalPoints += task.estimatedPoints;
            break;
          case 'In Progress':
            inProgressTasksTotalPoints += task.estimatedPoints;
            break;
          case 'Code Review':
            codeReviewTasksTotalPoints += task.estimatedPoints;
            break;
          case 'Done':
            doneTasksTotalPoints += task.estimatedPoints;
            break;
          default:
            break;
        }
      }
    }
  
    // Process the commands
    for (let i = n + 1; i < input.length; i++) {
      let [action, ...params] = input[i].split(':');
  
      if (action === 'Add New') {
        const [name, taskId, title, status, estimatedPoints] = params;
        if (!sprints[name]) {
          sprints[name] = [];
        }
        const sprint = new Sprint(taskId, title, status, Number(estimatedPoints));
        sprints[name].push(sprint);
      } else if (action === 'Change Status') {
        const [name, taskIdToUpdate, newStatus] = params;
        const assigneeTasks = sprints[name];
        if (!assigneeTasks) {
          console.log(`Assignee ${name} does not exist on the board!`);
        } else {
          const taskToUpdate = assigneeTasks.find((task) => task.taskId === taskIdToUpdate);
          if (!taskToUpdate) {
            console.log(`Task with ID ${taskIdToUpdate} does not exist for ${name}!`);
          } else {
            const oldStatus = taskToUpdate.status;
            taskToUpdate.status = newStatus;
            // Update points for the respective statuses
            switch (oldStatus) {
              case 'ToDo':
                toDoTasksTotalPoints -= taskToUpdate.estimatedPoints;
                break;
              case 'In Progress':
                inProgressTasksTotalPoints -= taskToUpdate.estimatedPoints;
                break;
              case 'Code Review':
                codeReviewTasksTotalPoints -= taskToUpdate.estimatedPoints;
                break;
              case 'Done':
                doneTasksTotalPoints -= taskToUpdate.estimatedPoints;
                break;
              default:
                break;
            }
            switch (newStatus) {
              case 'ToDo':
                toDoTasksTotalPoints += taskToUpdate.estimatedPoints;
                break;
              case 'In Progress':
                inProgressTasksTotalPoints += taskToUpdate.estimatedPoints;
                break;
              case 'Code Review':
                codeReviewTasksTotalPoints += taskToUpdate.estimatedPoints;
                break;
              case 'Done':
                doneTasksTotalPoints += taskToUpdate.estimatedPoints;
                break;
              default:
                break;
            }
          }
        }
      } else if (action === 'Remove Task') {
        const [name, indexToRemove] = params;
        const assigneeTasks = sprints[name];
  
        if (!assigneeTasks) {
          console.log(`Assignee ${name} does not exist on the board!`);
        } else if (isNaN(indexToRemove) || indexToRemove < 0 || indexToRemove >= assigneeTasks.length) {
          console.log('Index is out of range!');
        } else {
          const taskToRemove = assigneeTasks[indexToRemove];
          assigneeTasks.splice(indexToRemove, 1);
          // Update points for the respective statuses
          switch (taskToRemove.status) {
            case 'ToDo':
              toDoTasksTotalPoints -= taskToRemove.estimatedPoints;
              break;
            case 'In Progress':
              inProgressTasksTotalPoints -= taskToRemove.estimatedPoints;
              break;
            case 'Code Review':
              codeReviewTasksTotalPoints -= taskToRemove.estimatedPoints;
              break;
            case 'Done':
              doneTasksTotalPoints -= taskToRemove.estimatedPoints;
              break;
            default:
              break;
          }
        }
      } else {
        console.log(`Unknown command: ${action}`);
      }
    }
  
    // Print the points for each status
    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    console.log(`Done: ${doneTasksTotalPoints}pts`);
  
    // Check if the Sprint was successful
    if (doneTasksTotalPoints >= toDoTasksTotalPoints + inProgressTasksTotalPoints + codeReviewTasksTotalPoints) {
      console.log('Sprint was successful!');
    } else {
      console.log('Sprint was unsuccessful...');
    }
  }
import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/logErrorMongoRepository";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { AddTaskController } from "../controllers/task/addTask";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { addTaskValidationCompositeFactory } from "./AddTaskValidationCompositeFactory";

export const taskControllerFactory = () => {
  const taskMongoRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRepository);
  const taskController = new AddTaskController(dbAddTask, addTaskValidationCompositeFactory());
  const logErrorMongoRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(taskController, logErrorMongoRepository);
}
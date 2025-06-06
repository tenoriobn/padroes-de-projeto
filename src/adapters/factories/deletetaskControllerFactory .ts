import { DbDeleteTask } from "../../dataSources/db/dbDeleteTask";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/logErrorMongoRepository";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { DeleteTaskController } from "../controllers/task/deleteTask";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";

export const deleteTaskControllerFactory = () => {
  const taskMongoRepository = new TaskMongoRepository();
  const dbDeleteTask = new DbDeleteTask(taskMongoRepository);
  const taskController = new DeleteTaskController(dbDeleteTask, new RequiredFieldsValidation("id"));
  const logErrorMongoRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(taskController, logErrorMongoRepository);
}
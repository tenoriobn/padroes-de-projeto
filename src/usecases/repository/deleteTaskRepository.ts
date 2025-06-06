import { Task } from "../../entities/task";
import { DeleteTaskModel } from "../deleteTask";

export interface DeleteTaskRepository {
  delete(taskData: DeleteTaskModel): Promise<Error | void>;
}

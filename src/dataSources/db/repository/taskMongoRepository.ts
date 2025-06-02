import { Task } from "../../../entities/task";
import { AddATaskModel } from "../../../usecases/addTask";
import { AddTaskRepository } from "../../../usecases/repository/addTaskRepository";
import { MongoManager } from "../../config/mongoManager";

export class TaskMongoRepository implements AddTaskRepository {
  async add(taskData: AddATaskModel): Promise<Task> {
    const taskCollection = MongoManager.getInstance().getCollection("tasks");
    const { insertedId } = await taskCollection.insertOne(taskData);

    const taskById = await taskCollection.findOne({ _id: insertedId });
    if (!taskById) throw new Error("task not found");

    const task:Task = {
      id: taskById._id.toHexString(),
      title: taskById.title,
      description: taskById.description,
      date: taskById.date
    }

    return task;
  }
}

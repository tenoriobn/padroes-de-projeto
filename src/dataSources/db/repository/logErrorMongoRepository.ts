import { LogErrorRepository } from "../../../usecases/repository/logErrorRepository";
import { MongoManager } from "../../config/mongoManager";

export class LogErrorMongoRepository implements LogErrorRepository {
  async log(stack: string): Promise<void> {
    const logErrorCollection = MongoManager.getInstance().getCollection("errors");
    await logErrorCollection.insertOne({ stack, date: new Date() });
  }
}
export class MongoManager {
  public static instance: MongoManager;
  private constructor() {}

  public static getInstance():MongoManager {
    if(!MongoManager.instance){
      MongoManager.instance = new MongoManager();
    }

    return MongoManager.instance;
  }
}
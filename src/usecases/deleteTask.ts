export interface DeleteTaskModel {
  id: string;
}

export interface DeleteTask {
  delete(task: DeleteTaskModel): Promise<Error | void>;
}

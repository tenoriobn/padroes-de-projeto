import { badRequest, created, noContent, serverError, } from "../../presentations/api/httpResponses/httpResponses";
import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { AddTask } from "../../../usecases/addTask";
import { Validation } from "../../interfaces/validation";
import { DeleteTask } from "../../../usecases/deleteTask";

export class DeleteTaskController implements Controller{
  constructor (
    private readonly deleteTask: DeleteTask, 
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.body;

      const isValid = this.validation.validate({ id });

      if (isValid) {
        return badRequest(isValid);
      }

      const error = await this.deleteTask.delete({ id });
      if (error) {
        return badRequest(error);
      }

      return noContent();
    } catch (error: any) {
      return serverError(error);
    }
  }
}

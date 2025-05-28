import { InvalidParamError } from "../../presentations/api/errors/invalid-param-error";
import { MissingParamError } from "../../presentations/api/errors/missing-param-error";
import { badRequest, created, } from "../../presentations/api/httpResponses/httpResponses";
import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { DateValidator } from "../../interfaces/dateValidator";

export class AddTaskController implements Controller{
  constructor (private readonly dateValidator: DateValidator) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ["title", "description", "date"];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    const { title, description, date } = httpRequest.body;

    const isValid = this.dateValidator.isValid(date);

    if (!isValid) {
      return badRequest(new InvalidParamError("date"));
    }

    const task = { title, description, date };
    return (created(task));
  }
}

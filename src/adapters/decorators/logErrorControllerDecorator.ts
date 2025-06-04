import { Controller } from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http";

export class LogErrorControllerDecorator implements Controller {
  constructor(private readonly controller: Controller) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);

    if(httpResponse.statusCode === 500) {
      console.log('logo do erro');
    }

    return httpResponse;
  }
}
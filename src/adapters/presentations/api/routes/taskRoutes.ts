import { Router } from "express";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { taskControllerFactory } from "../../../factories/taskControllerFactory";
import { deleteTaskControllerFactory } from "../../../factories/deletetaskControllerFactory ";

export default (router: Router): void => {
  router.post("/tasks", expressRouteAdapter(taskControllerFactory()));
  router.delete("/tasks", expressRouteAdapter(deleteTaskControllerFactory()));
};

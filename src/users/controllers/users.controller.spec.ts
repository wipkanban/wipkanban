import { Test, TestingModule } from "@nestjs/testing";
import {UsersController} from "./users.controller"
import {UserService} from "../services/user.service"
import {User} from '../Entities/user.entity';

describe("-- Client Controller --", () => {
 let userController: UsersController;

 afterEach(() => {
    jest.resetAllMocks();
 });

 it('test service', () => {
  const users: User[] = new Array<User>();

  userController = new UsersController();
  const expectedResult = users;
  jest.spyOn(userController, "posts").mockResolvedValue(expectedResult);

  expect(userController.posts()).toBe(expectedResult);

 });

});

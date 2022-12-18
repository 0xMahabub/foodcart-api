import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService],
    }).compile();

    controller = app.get<UserController>(UserController);
    service = app.get<UserService>(UserService);
  });

  describe('get all users', () => {
    it('should return User[]', async () => {
      let result: Promise<User[]>;
      jest.spyOn(service, 'users').mockImplementation(() => result);
      expect(await controller.getAllUsers()).toBe(result);
    });
  });
});

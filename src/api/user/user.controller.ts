import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { Password } from '../../helper/password';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // CREATE
  @Post()
  async createUser(
    @Body() userInfo: { name: string; email: string; password: string },
  ): Promise<User> {
    const pwd = new Password(userInfo.password);
    return this.userService.createUser({
      ...userInfo,
      password: await pwd.hash(),
    });
  }
  // GET ALL
  @Get('')
  async getAllUsers(): Promise<User[]> {
    return this.userService.users({});
  }
  // GET ONE
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.user({ id }, { cartItems: true });
  }
  // UPDATE
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: { name: string; email: string; password: string },
  ): Promise<User> {
    const pwd = new Password(id);
    return this.userService.updateUser({
      where: { id },
      data: {
        ...data,
        password: await pwd.hash(),
      },
    });
  }
  // DELETE
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser({ id });
  }
}

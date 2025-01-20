import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getUser() {
    const users = await this.userService.getAllUser();
    return { data: users };
  }

  @Post()
  async createUser(@Body() userDTO: UserDTO) {
    console.log(userDTO);
    const user = await this.userService.createUser(userDTO);
    return { data: user };
  }
}

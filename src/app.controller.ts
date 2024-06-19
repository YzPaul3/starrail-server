import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { User } from './modules/user/models/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService){}

  @Get('/create')
  async create(params: User): Promise<boolean>{
    return await this.userService.create(params)
  }
  
  @Get('/del')
  async del(id: string): Promise<boolean>{
    return await this.userService.del(id)
  }

  @Get('/update')
  async update(id: string, params: User): Promise<boolean>{
    return await this.userService.update(id, params)
  }

  @Get('/find')
  async find(id: string): Promise<User>{
    return await this.userService.find(id)
  }

}

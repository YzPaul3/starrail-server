import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { User } from './modules/user/models/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService){}

  @Get('/create')
  async create(): Promise<boolean>{
    return await this.userService.create({
      name: 'super admin',
      desc: 'admin user',
      tel: '123123',
      password: '123456',
      account: 'admin'
    })
  }
  
  @Get('/del')
  async del(): Promise<boolean>{
    return await this.userService.del('5b34f50b-1586-45c4-8274-5679143b9526')
  }

  @Get('/update')
  async update(): Promise<boolean>{
    return await this.userService.update('b69d3428-aa57-4f2f-8369-59bcd2a537fc', {
      name: 'super admin1',
      desc: 'admin user update desc',
      tel: '123123',
      password: '123456',
      account: 'admin'
    })
  }

  @Get('/find')
  async find(): Promise<User>{
    return await this.userService.find('b69d3428-aa57-4f2f-8369-59bcd2a537fc')
  }

}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { User } from './models/user.entity'

@Injectable() // ClassDecorator as Provider 依赖注入
export class UserService {

  // 创建UserRepository
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>
  ) {}

  // 创建用户
  // DeepPartial 工具类型 所有属性加个？
  async create(entity: DeepPartial<User>): Promise<boolean>  {
    const res = await this.UserRepository.insert(entity)
    if (res && res.raw.affectedRows > 0) {
      return true
    }
    return false;
  }

  // 删除用户
  async del(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id);
    if (res.affected > 0) {
      return true
    }
    return false;
  }

  // 更新用户信息
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity);
    if (res.affected > 0) {
      return true
    }
    return false;
  }

  // 查询用户信息
  async find(id: string): Promise<User> {
    const res = await this.UserRepository.findOne({
      where: {
        id
      }
    });
 
    return res;
  }

}
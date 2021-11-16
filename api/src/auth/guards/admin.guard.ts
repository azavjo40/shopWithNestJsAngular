import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Observable } from "rxjs"
import { Auth, AuthDocument } from "../schemas/auth.schema"

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(@InjectModel(Auth.name) private User: Model<AuthDocument>) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    return this.adminGuard(request.user.userId)
  }

  async adminGuard(_id: string): Promise<boolean> {
    const user = await this.User.findById({ _id })
    if (user.administration) return true
    else return false
  }
}

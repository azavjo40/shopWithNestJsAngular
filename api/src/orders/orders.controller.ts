import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Body,
  Param,
} from "@nestjs/common"
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard"
import { ValidationPipe } from "src/auth/pipes/validation.pipe"
import { IAnswerMessage } from "./intarface"
import { OrdersDto } from "./dto/orders.dto"
import { OrdersService } from "./orders.service"

@Controller("orders")
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get("/allOrders/:userId")
  @HttpCode(HttpStatus.OK)
  allOrders(@Param("userId") userId: string): Promise<OrdersDto[]> {
    return this.ordersService.allOrders(userId)
  }

  @Post("/buy")
  @HttpCode(HttpStatus.OK)
  buyProduct(
    @Body(new ValidationPipe()) body: OrdersDto
  ): Promise<IAnswerMessage> {
    return this.ordersService.buy(body)
  }

  @Get("/history/:phone")
  @HttpCode(HttpStatus.OK)
  history(@Param("phone") phone: string): Promise<OrdersDto[]> {
    return this.ordersService.history(phone)
  }
}

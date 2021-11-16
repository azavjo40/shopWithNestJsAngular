import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Patch,
  UseInterceptors,
  UploadedFile,
  Body,
  Param,
} from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { diskStorage } from "multer"
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard"
import { ValidationPipe } from "src/auth/pipes/validation.pipe"
import { ProductDto } from "./dto/create.dto"
import { editFileName, imageFileFilter } from "./utils/file-upload.utils"
import { IAnswerMessage } from "./intarface"
import { ProductService } from "./product.service"
import { BuyProductDto } from "./dto/buyProduct.dto"
import { sayHelloInterceptor } from "./interceptors/sayHello.interceptor"

@Controller("product")
@UseInterceptors(sayHelloInterceptor)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Post("/create")
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./upload",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body(new ValidationPipe()) body: ProductDto
  ): Promise<IAnswerMessage> {
    return this.productService.create({ ...body, image: file.path })
  }

  @Get("/getAll")
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<ProductDto[]> {
    return this.productService.getAll()
  }

  @UseGuards(JwtAuthGuard)
  @Patch("/update")
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./upload",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  patch(
    @UploadedFile() file: Express.Multer.File,
    @Body(new ValidationPipe()) body: any
  ): Promise<IAnswerMessage> {
    return this.productService.patch({
      ...body,
      image: file ? file.path : null,
    })
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/removeById/:id")
  @HttpCode(HttpStatus.OK)
  removeById(@Param("id") id: string): Promise<IAnswerMessage> {
    return this.productService.removeById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Get("/allOrders/:userId")
  @HttpCode(HttpStatus.OK)
  allOrders(@Param("userId") userId: string): Promise<BuyProductDto[]> {
    return this.productService.allOrders(userId)
  }

  @Post("/buyProduct")
  @HttpCode(HttpStatus.OK)
  buyProduct(
    @Body(new ValidationPipe()) body: BuyProductDto
  ): Promise<IAnswerMessage> {
    return this.productService.buyProduct(body)
  }

  @Get("/buyPurchaseHistory/:phone")
  @HttpCode(HttpStatus.OK)
  buyPurchaseHistory(@Param("phone") phone: string): Promise<BuyProductDto[]> {
    return this.productService.buyPurchaseHistory(phone)
  }
}

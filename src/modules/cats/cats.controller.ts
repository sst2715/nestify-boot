import { Controller, SerializeOptions } from '@nestjs/common'
import { CatsService } from './cats.service'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { CrudController } from '@/modules/core/crud/crud.controller'
import { Crud } from '@/modules/core/crud/crud.decorator'
import { PageQueryCatsDto } from './cats.dto'
import { CreateCatsDto, UpdateCatsDto } from './cats.dto'

@Crud({
  enabled: ['create', 'findOne', 'findAll', 'findPage', 'update', 'delete'],
  dtos: {
    create: CreateCatsDto,
    update: UpdateCatsDto,
    query: PageQueryCatsDto,
  },
})
@SerializeOptions({ excludePrefixes: ['deleted'] })
@ApiTags('cats')
@ApiBearerAuth()
@Controller('cats')
export class CatsController extends CrudController {
  constructor(private readonly catsService: CatsService) {
    super(catsService)
  }
}

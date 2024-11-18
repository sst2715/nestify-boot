import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { CrudService } from '@/modules/core/crud/crud.service'

@Injectable()
export class CatsService extends CrudService {
  model: Prisma.ModelName = Prisma.ModelName.Cat
  constructor(protected prisma: PrismaService) {
    super(prisma)
  }
}

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'
import { OmitType, PartialType } from '@nestjs/swagger'
import { paginatedDto } from '@/common/model/paginate'
import { IntersectionType } from '@nestjs/swagger'

export class CreateCatsDto {
  @ApiProperty({ description: 'ID' })
  id: number

  @IsNotEmpty({ message: '名称不能为空' })
  @ApiProperty({ description: '名称' })
  name: string

  @IsNotEmpty({ message: '年龄不能为空' })
  @IsNumber()
  @ApiProperty({ description: '年龄' })
  age: number
}

export class UpdateCatsDto extends PartialType(OmitType(CreateCatsDto, [] as const)) {}

export class PageQueryCatsDto extends IntersectionType(paginatedDto, UpdateCatsDto) {}
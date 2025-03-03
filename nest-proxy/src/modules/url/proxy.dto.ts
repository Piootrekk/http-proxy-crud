import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

class ProxyErrorDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  message: string;
  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  status: number;
  @ApiProperty({
    type: String,
  })
  @IsString()
  url: string;
}

class ProxyBodyDto {
  @ApiProperty({
    type: Object,
    description: 'Any JSON object',
    additionalProperties: true,
    example: { key: 'value' },
  })
  @IsObject()
  body: Record<string, unknown>;
}

class ProxyResponseDto {
  @ApiProperty({
    description:
      'Response can be of any type (string, number, json object, etc.)',
    example: { message: 'Success' },
  })
  data: unknown;
}

export { ProxyErrorDto, ProxyBodyDto, ProxyResponseDto };

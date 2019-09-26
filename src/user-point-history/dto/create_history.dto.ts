import {ApiModelProperty} from '@nestjs/swagger';

export class CreateHistoryDto {

  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly userId: number;

  @ApiModelProperty()
  readonly musicianId: number;

  @ApiModelProperty()
  readonly goodsId: number;

  @ApiModelProperty()
  readonly status: boolean;

  @ApiModelProperty()
  readonly price: number;

  @ApiModelProperty()
  readonly balance: number;
}

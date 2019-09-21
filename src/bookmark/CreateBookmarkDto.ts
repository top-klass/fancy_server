import {ApiModelProperty} from '@nestjs/swagger';

export class CreateBookmarkDto {

  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly userId: number;

  @ApiModelProperty()
  readonly musicianId: number;
}

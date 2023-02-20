import { Expose } from 'class-transformer';

export class ResponseUser {
  @Expose()
  id: string;

  @Expose()
  email: string;
}

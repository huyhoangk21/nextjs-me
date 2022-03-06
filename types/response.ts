import { Data } from './data';
import { Pagination } from './pagination';

export interface Response<T> {
  data: Data<T>[];
  meta?: Pagination;
  error?: any;
}

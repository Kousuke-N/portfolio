import { WorkCategory } from './work-category';

export interface Work {
  id: string;
  title: string;
  description: string;
  date: Date;
  result: string;
  thumbnail: string;
  cateogryIds: string[];
}

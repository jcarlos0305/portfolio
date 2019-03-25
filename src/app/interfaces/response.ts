import { Asset } from './asset';

export interface Response {
  images: Asset[];
  message: string;
  success: string;
}

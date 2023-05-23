import { v4 as uuidv4 } from 'uuid';
import { Product, ProductOption, ProductOptionItem } from './types';

export const initialProduct: Product = {
  _id: '',
  title: '',
  description: '',
  price: 0,
  compareAtPrice: 0,
  slug: '',
  status: 'draft',
  options: [],
  tags: [],
  variants: [],
};

export const initialOption = (): ProductOption => ({
  id: uuidv4(),
  name: '',
  values: [],
});

export const initialOptionItem = (): ProductOptionItem => ({
  id: uuidv4(),
  label: '',
  value: '',
});
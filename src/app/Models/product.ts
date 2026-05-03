export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  imageURL?: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  inStock?: boolean;
  size?: string;
}

export interface LandscapeItem {
  id: number;
  name: string;
  price: string;
  description?: string;
  imageURL?: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  inStock?: boolean;
  size?: string;
  premiumColorPrice?: string;
}

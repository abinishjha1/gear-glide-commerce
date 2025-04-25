
export interface ProductData {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  category: string;
  subcategory: string;
  brand: string;
  inStock: boolean;
  featured?: boolean;
}

export interface InquiryData {
  id?: string;
  name: string;
  email: string;
  message: string;
  productId: string;
  productName: string;
  createdAt?: string;
}

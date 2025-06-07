export interface Photo {
  id: string;
  url: string;
  category: string;
  title: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image?: string;
  rating: number;
}
type Product = {
  name: string;
  brand: string;
  price: number;
  slug: string;
  description: string;
  imgurl?: string; // 👈 optional
};

export type Treatment = {
  condition: string;
  tag: string;
  slug: string;
  description: string;
  imgurl?: string; // 👈 optional
  products: Product[];
};
// export type Treatments = Treatment[];

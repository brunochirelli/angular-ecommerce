export type Product = {
  /** @description Unique identifier for the product */
  id?: number;
  /** @description Name of the product */
  name: string;
  /** @description Slug of the product */
  slug?: string;
  /** @description Description of the product */
  description?: string;
  /**
   * Format: float
   * @description Price of the product
   */
  price: number;
  /**
   * Format: uri
   * @description URL to the product image
   */
  image?: string;
};

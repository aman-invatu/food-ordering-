
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  cuisine: string;
  rating: number;
  reviews: number;
  popular?: boolean;
  discount?: number;
}

export interface CuisineCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  dishes: string[];
}

export type CartItem = {
  item: MenuItem;
  quantity: number;
};

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export type NavItem = {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
};

export type SubMenuItem = {
  title: string;
  href: string;
  description?: string;
};

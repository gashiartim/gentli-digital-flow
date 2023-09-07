import { off } from "process";

export interface NavigationItem {
  label: string;
  url: string;
  className?: string;
  children?: NavigationItem[];
}

export interface OfferItem {
  image: string;
  price: string;
  oldPrice?: string;
}

export interface CategoryItem {
  label: string;
  image: string;
  url?: string;
}

export interface BrandItem {
  label: string;
  image: string;
  url?: string;
  offers?: BrandItemOffer[];
}

export interface BrandItemOffer {
  image: string;
  genders: string[];
}

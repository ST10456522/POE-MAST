

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
  ingredients?: string[];  
  allergens?: string[];    
  recommended?: boolean;   
}

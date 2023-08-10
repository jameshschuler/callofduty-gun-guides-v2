export interface Category {
  categoryId: number;
  categoryName: string;
  guideCount: number;
  slug: string;
}

export interface CategoriesResponse {
  gameName: string;
  categories: Category[];
}

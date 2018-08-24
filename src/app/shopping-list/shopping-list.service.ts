import { Ingredient } from '../Shared/ingredient.model';

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
      getIngredents(){
          return this.ingredients.slice();
      }
}
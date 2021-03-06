import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media.defense.gov/2016/Sep/20/2001637436/1088/820/0/160913-F-BO262-1020.JPG'),
    new Recipe('A another Test Recipe', 'This is simply a test', 'https://media.defense.gov/2016/Sep/20/2001637436/1088/820/0/160913-F-BO262-1020.JPG'),
    new Recipe('A third Test Recipe', 'This is simply a test', 'https://media.defense.gov/2016/Sep/20/2001637436/1088/820/0/160913-F-BO262-1020.JPG'),
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
   this.recipeWasSelected.emit(recipe);
  }

}

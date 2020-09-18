export class Recipe {
  public name: string;
  public description: string;
  public batchSize: number;
  public ingredients: string[];

  constructor(name: string, description: string, size: number, ingredients: string[]) {
    this.name = name;
    this.description = description;
    // in ounces
    this.batchSize = size;
    this.ingredients = ingredients;
  }
}

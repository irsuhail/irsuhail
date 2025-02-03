import { Building } from './Building';

export class ArtDecoBuilding extends Building {
  private decorativeElements: string[];
  private originalMaterials: string[];

  constructor(
    name: string,
    location: string,
    architect: string,
    constructionDate: Date,
    decorativeElements: string[],
    originalMaterials: string[]
  ) {
    super(name, location, architect, constructionDate, "Art Deco");
    this.decorativeElements = decorativeElements;
    this.originalMaterials = originalMaterials;
  }

  public getArchitecturalFeatures(): string[] {
    return [
      "Geometric shapes",
      "Stepped facades",
      "Decorative elements",
      ...this.decorativeElements,
    ];
  }

  public getHistoricalContext(): string {
    return 
    $ {this.name}
     was built during the Art Deco movement of the 1920s and 1930s, characterized by its luxurious materials and geometric patterns;
  }

  public getOriginalMaterials(): string[] {
    return this.originalMaterials;
  }
}

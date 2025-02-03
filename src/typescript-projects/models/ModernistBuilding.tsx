import { Building } from './Building';

export class ModernistBuilding extends Building {
  private sustainableFeatures: string[];
  private openPlanDetails: string;

  constructor(
    name: string,
    location: string,
    architect: string,
    constructionDate: Date,
    sustainableFeatures: string[],
    openPlanDetails: string
  ) {
    super(name, location, architect, constructionDate, "Modernist");
    this.sustainableFeatures = sustainableFeatures;
    this.openPlanDetails = openPlanDetails;
  }

  public getArchitecturalFeatures(): string[] {
    return [
      "Minimal ornamentation",
      "Clean lines",
      "Large windows",
      ...this.sustainableFeatures,
    ];
  }

  public getHistoricalContext(): string {
    return ${this.name} represents the Modernist movement's emphasis on functionality and clean aesthetics.;
  }

  public getOpenPlanDetails(): string {
    return this.openPlanDetails;
  }
}

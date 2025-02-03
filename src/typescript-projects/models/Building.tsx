export abstract class Building {
    constructor(
      protected name: string,
      protected location: string,
      protected architect: string,
      protected constructionDate: Date,
      protected style: string
    ) {}
  
    public getName(): string {
      return this.name;
    }
  
    public getLocation(): string {
      return this.location;
    }
  
    public getArchitect(): string {
      return this.architect;
    }
  
    public getConstructionDate(): Date {
      return this.constructionDate;
    }
  
    public getStyle(): string {
      return this.style;
    }
  
    public setName(name: string): void {
      if (name.trim().length === 0) {
        throw new Error("Building name cannot be empty");
      }
      this.name = name;
    }
  
    abstract getArchitecturalFeatures(): string[];
    abstract getHistoricalContext(): string;
  }
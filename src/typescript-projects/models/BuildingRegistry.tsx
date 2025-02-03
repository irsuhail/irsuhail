import { Building } from '../models/Building';

export class BuildingRegistry {
  private buildings: Building[] = [];

  public addBuilding(building: Building): void {
    this.buildings.push(building);
  }

  public getBuildingsByStyle(style: string): Building[] {
    return this.buildings.filter(building => building.getStyle() === style);
  }

  public searchBuildings(searchTerm: string): Building[] {
    return this.buildings.filter(building => 
      building.getName().toLowerCase().includes(searchTerm.toLowerCase()) ||
      building.getLocation().toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  public getAllBuildings(): Building[] {
    return [...this.buildings];
  }
}

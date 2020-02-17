interface IItem {
  location: string;
  number: number;
  date: string;
  description: string;
}

export class Item implements IItem {
  location: string;
  number: number;
  date: string;
  description: string;
  constructor(location: string, number: number, date: string, description: string) {
    this.location = location;
    this.number = number;
    this.date = date;
    this.description = description;
  }
}

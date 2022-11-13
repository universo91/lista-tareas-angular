
export class Item {
  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;
  completed: boolean = false;

  constructor(id: number = 0, title: string = '', price: number = 0, quantity: number = 0, completed: boolean = false) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.completed = completed;
  }

}

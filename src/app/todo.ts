export class Todo{
  id: number;
  title: string = '';
  complete: boolean = false; //whether or not the todo item is complete

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

// let todo = new Todo({
//      title: 'Read SitePoint article',
//      complete: false
// });

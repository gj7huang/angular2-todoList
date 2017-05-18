import { Angular2TodoListPage } from './app.po';

describe('angular2-todo-list App', () => {
  let page: Angular2TodoListPage;

  beforeEach(() => {
    page = new Angular2TodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

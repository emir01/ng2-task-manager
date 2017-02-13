import { Ng2TaskManagerPage } from './app.po';

describe('ng2-task-manager App', function() {
  let page: Ng2TaskManagerPage;

  beforeEach(() => {
    page = new Ng2TaskManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

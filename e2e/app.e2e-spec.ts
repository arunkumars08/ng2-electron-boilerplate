import { FunAppPage } from './app.po';

describe('fun-app App', function() {
  let page: FunAppPage;

  beforeEach(() => {
    page = new FunAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

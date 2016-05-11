import { WorldWideBudgetPage } from './app.po';

describe('world-wide-budget App', function() {
  let page: WorldWideBudgetPage;

  beforeEach(() => {
    page = new WorldWideBudgetPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('world-wide-budget works!');
  });
});

export class WorldWideBudgetPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('world-wide-budget-app h1')).getText();
  }
}

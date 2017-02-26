import { browser, element, by } from 'protractor';

export class EvFrontPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-toolbar span')).getText();
  }
}

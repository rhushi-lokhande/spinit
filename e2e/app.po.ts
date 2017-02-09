import { browser, element, by } from 'protractor';

export class SpinitPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('spinit-root h1')).getText();
  }
}

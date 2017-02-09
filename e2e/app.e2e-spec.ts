import { SpinitPage } from './app.po';

describe('spinit App', function() {
  let page: SpinitPage;

  beforeEach(() => {
    page = new SpinitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('spinit works!');
  });
});

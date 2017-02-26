import { EvFrontPage } from './app.po';

describe('ev-front App', function() {
  let page: EvFrontPage;

  beforeEach(() => {
    page = new EvFrontPage();
  });

  it('should display a topnav bar saying esport viewer', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('esport viewer');
  });
});

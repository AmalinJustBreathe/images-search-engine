import { ImageSearchEnginePage } from './app.po';

describe('image-search-engine App', () => {
  let page: ImageSearchEnginePage;

  beforeEach(() => {
    page = new ImageSearchEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

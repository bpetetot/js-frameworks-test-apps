import { TweetsAngularPage } from './app.po';

describe('tweets-angular App', () => {
  let page: TweetsAngularPage;

  beforeEach(() => {
    page = new TweetsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

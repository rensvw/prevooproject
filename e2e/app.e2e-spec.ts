import { PrevooProjectPage } from './app.po';

describe('prevoo-project App', () => {
  let page: PrevooProjectPage;

  beforeEach(() => {
    page = new PrevooProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

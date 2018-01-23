import { GrailsoftAngularPage } from './app.po';

describe('grailsoft-angular App', () => {
  let page: GrailsoftAngularPage;

  beforeEach(() => {
    page = new GrailsoftAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

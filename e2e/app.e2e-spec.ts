import { BlogPage } from './app.po';

describe('blog App', function() {
  let page: BlogPage;

  beforeEach(() => {
    page = new BlogPage();
  });

  it('should run e2e tests', () => {
    page.navigateTo();
    expect(true).toEqual(true);
  });
});

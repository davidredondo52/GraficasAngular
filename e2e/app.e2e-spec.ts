import { GraficosPage } from './app.po';

describe('graficos App', () => {
  let page: GraficosPage;

  beforeEach(() => {
    page = new GraficosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import CrawledPage from '../models/CrawledPageModel';
import puppeteer from 'puppeteer';

export const crawl = async (req, res) => {
  const { url } = req.body;
  // validate url?

  let browser;
  let page;

  try {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(url);
  } catch (err) {
    return res.json({ error: 'unable to launch or reach the url' });
  }

  // Scrapings
  let title;
  try {
    title = await page.title();
  } catch (err) {
    console.log({ error: 'title is not available' });
  }

  let description;
  try {
    // eslint-disable-next-line quotes
    description = await page.$eval(`head > meta[name="description"]`, e => e.content);
  } catch (err) {
    console.log({ error: 'description is unavailable' });
  }

  let h1;
  try {
    h1 = await page.$$eval('h1', h1s => h1s.map(e => e.textContent));
  } catch (err) {
    console.log(err, { error: 'h1 is unavailable' });
  }

  let h2;
  try {
    h2 = await page.$$eval('h2', h2s => h2s.map(e => e.textContent));
    console.log(h2);
  } catch (err) {
    console.log({ error: 'h2 is unavailable' });
  }

  let links;
  try {
    links = await page.$$eval('a', as => as.map(a => a.href));
    console.log(links);
  } catch (err) {
    console.log(err, { error: 'something happened with the links' });
  }

  try {
    const doc = new CrawledPage({ title, description, h1, h2, links, url });
    await doc.save();
    console.log(doc.url + ' is saved to CrawledPage collection.');
    return res.json(doc);
  } catch (err) {
    console.error(err);
    return res.json({ error: 'Failed to store the request and its data' });
  }
};

//load history using mongoose -> https://mongoosejs.com/
export const getHistory = (req, res) => {
  CrawledPage.find({}, (error, pages) => {
    if (error) {
      return res.status(400).json(error);
    }

    return res.send(pages);
  });
};

export const deleteSite = async (req, res) => {
  const { url } = req.body;
  try {
    await CrawledPage.findOneAndDelete({ url });
    return res.status(200);
  } catch (err) {
    return res.status(400).json({ err });
  }
};

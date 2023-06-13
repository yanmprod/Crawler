import superagent from 'superagent';

const API = 'http://localhost:3000'
const responseBody = (res: any) => {
  return res.body;
};

const httpHeaders = (req: any) => {
  req.set('Accept', 'application/json');
};

const requests = {
  del: (url: string, body: any) =>
    superagent.del(`${API}${url}`, body).use(httpHeaders).then(responseBody),
  get: (url: string) =>
    superagent.get(`${API}${url}`).withCredentials().use(httpHeaders).then(responseBody),
  put: (url: string, body: any) =>
    superagent.put(`${API}${url}`, body).use(httpHeaders).then(responseBody),
  post: (url: string, body: any) =>
    superagent.post(`${API}${url}`, body).withCredentials().use(httpHeaders).then(responseBody),
};

const Crawler = {
  crawl: (url: any) =>
    requests.post('/crawler/crawl', {url}),
  getHistory: () =>
    requests.get(`/crawler/history`),
  delete: (url: any) =>
    requests.del(`/crawler/delete`, {url})
};

export default {
  Crawler,
};

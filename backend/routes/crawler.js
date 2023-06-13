import express from 'express';
import { crawl, getHistory, deleteSite } from '../controllers/crawlerController';
let crawlerRouter = express.Router();

// we protect the POST, PUT and DELETE methods
crawlerRouter.post('/crawl', crawl);
crawlerRouter.get('/history', getHistory);
crawlerRouter.delete('/delete', deleteSite);

export default crawlerRouter;

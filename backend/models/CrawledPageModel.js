import mongoose, { Schema } from 'mongoose';

const crawledPageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  h1: {
    type: Array
  },
  h2: {
    type: Array
  },
  links: {
    type: Array
  },
  creationDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  updateDate: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export default mongoose.model('CrawledPage', crawledPageSchema);

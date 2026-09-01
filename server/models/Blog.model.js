import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true 
  },
  shortDescription: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, // Will store Base64 Data URI
    default: ''
  },
  date: { 
    type: String,
    required: true 
  },
  readingTime: { 
    type: String,
    default: '1 min read'
  },
}, { 
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

export const Blog = mongoose.model('Blog', blogSchema);

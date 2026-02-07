
import mongoose  from 'mongoose';
import Product from '../models/product.model.js';
import dotenv from "dotenv";
dotenv.config()
import dns from "node:dns/promises";   
dns.setServers(["1.1.1.1", "1.0.0.1"]); 

const seedProducts = [
  {
    name: '22K Gold Ring',
    price: 18500,
    image: 'https://via.placeholder.com/300x300?text=Gold+Ring',
    description: 'Elegant 22K gold ring for daily and occasion wear.',
    category: 'Rings',
    inStock: true,
  },
  {
    name: 'Diamond Pendant Necklace',
    price: 48500,
    image: 'https://via.placeholder.com/300x300?text=Diamond+Necklace',
    description: 'Premium diamond pendant with white gold chain.',
    category: 'Necklaces',
    inStock: true,
  },
  {
    name: 'Silver Charm Bracelet',
    price: 8200,
    image: 'https://via.placeholder.com/300x300?text=Silver+Bracelet',
    description: 'Sterling silver charm bracelet with modern design.',
    category: 'Bracelets',
    inStock: true,
  },
  {
    name: 'Traditional Gold Bangles',
    price: 65500,
    image: 'https://via.placeholder.com/300x300?text=Gold+Bangles',
    description: 'Pair of traditional 22K gold bangles.',
    category: 'Bangles',
    inStock: true,
  },
  {
    name: 'Pearl Stud Earrings',
    price: 9500,
    image: 'https://via.placeholder.com/300x300?text=Pearl+Earrings',
    description: 'Classic pearl stud earrings for elegant look.',
    category: 'Earrings',
    inStock: true,
  },
  {
    name: 'Diamond Engagement Ring',
    price: 125000,
    image: 'https://via.placeholder.com/300x300?text=Engagement+Ring',
    description: 'Luxury diamond engagement ring with certified stone.',
    category: 'Rings',
    inStock: true,
  }
];

const runSeed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding');

    await Product.deleteMany();
    console.log('Existing products cleared');

    await Product.insertMany(seedProducts);
    console.log('Seed products inserted successfully');

    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

runSeed();

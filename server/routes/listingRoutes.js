import express from 'express';
import Listing from '../models/Listing.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Access denied');

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).send('Invalid Token');
  }
};

router.post('/', verifyToken, async (req, res) => {
  const listing = new Listing({ ...req.body, postedBy: req.userId });
  try {
    const saved = await listing.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().populate('postedBy', 'username');
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    res.json(listing);
  } catch (err) {
    res.status(404).json({ error: 'Listing not found' });
  }
});

export default router;

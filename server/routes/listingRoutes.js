import express from 'express';
import Listing from '../models/Listing.js';
import { verifyToken } from '../middleware/authMiddleware.js'; // ✅ Correct import
import { validateListing } from '../validation/listingValidation.js';

const router = express.Router();

// Create a new listing
router.post('/', verifyToken, async (req, res) => { // ✅ use verifyToken
  // Validate input
  const { error } = validateListing(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    // Use decoded token's user id
    const listing = new Listing({ ...req.body, postedBy: req.user.id });
    const saved = await listing.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().populate('postedBy', 'username');
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get listing by ID
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

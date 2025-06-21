import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  coordinates: { lat: Number, lng: Number },
  image: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Listing', listingSchema);

import mongoose from 'mongoose';
const s = new mongoose.Schema({
  fullName: String, email: String, phone: String, company: String, industry: String,
  agents: String, requirement: String, contactMethod: String, message: String,
  consent: Boolean, source: String, ip: String,
}, { timestamps: true });
export default mongoose.model('Lead', s);

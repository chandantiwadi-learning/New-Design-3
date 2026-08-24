import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
}, { strict: false });

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

async function updateDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');
    
    // Delete chandan
    const res = await Admin.deleteMany({ email: 'chandan110906@gmail.com' });
    console.log(`Deleted ${res.deletedCount} old admins`);

    // Update sales to superadmin
    const updateRes = await Admin.updateOne(
      { email: 'sales@hexindiafasteners.com' },
      { $set: { role: 'superadmin' } }
    );
    console.log(`Updated sales to superadmin: ${updateRes.modifiedCount}`);

  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

updateDB();

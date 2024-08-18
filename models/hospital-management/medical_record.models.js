import mongoose from 'mongoose';

const medicalrecordSchema = new mongoose.Schema({},{timestamps: true});

export const MedicalRecords = mongoose.model("MedicalRecords", medicalrecordSchema);
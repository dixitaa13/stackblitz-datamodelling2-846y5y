import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
    {
        name: {
         type: String,
         required: true
        },
        diagnosedwith: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        bloodGroup: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["M","F","O"],
            required: true
        },
        admittedin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospitals"
        }
    },{timestamps: true});

export const Patients = mongoose.model("Patients", patientSchema);
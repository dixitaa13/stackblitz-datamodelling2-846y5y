import mongoose from 'mongoose';

const hospitalHours = new mongoose.Schema({
    Hours: {
        type: Number,
        required: true,
        default: 0
    }
});
const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        qualification: {
            type: String,
            required: true
        },
        experienceInYears: {
            type: Number,
            default: 0
        },
        worksinHospitals: [ hospitalHours,
            {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Hospitals"
            }
        ]
    },{timestamps: true});

export const Doctors = mongoose.model("Doctors", doctorSchema);
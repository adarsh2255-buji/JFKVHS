import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    class: {
        type : String,
        enum : ['V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
        required: true
    },
    division: {
        type: String,
        enum: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        required: true
    },
    medium : {
        type: String,
        enum: ['English', 'Malayalam'],
        required: true
    },
    dateOfBirth: Date,
    age: Number,
    gender : {
        type: String,
        enum:['male', 'female', 'other']
    },
    address: {
        houseName: String,
        street: String,
        city: String,
        pincode: String,
        district: String,
    },
    fatherName: String,
    motherName: String,
    bloodGroup: String,
    phoneNumber: String,
    whatsappNumber: String,
    photo: String,
    agreedToTerms: Boolean,
    registrationId: {
        type: Number,
        unique: true,
        required: true,
        index: true
    },
}, {timestamps: true});

const Student = mongoose.model("Student", studentSchema);
export default Student;
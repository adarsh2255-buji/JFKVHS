import Student from "../models/Student.js";
import path from "path";

// Create a new student
export const createStudent = async (req, res) => {
    try {
        const {
            name,
            class: studentClass,
            division,
            medium,
            dateOfBirth,
            gender,
            address,
            fatherName,
            motherName,
            bloodGroup,
            phoneNumber,
            whatsappNumber,
            agreedToTerms
        } = req.body;

        //age calculation
        const dob = new Date(dateOfBirth);
        const age = new Date().getFullYear() - dob.getFullYear();

        //photo path
        const photo = req.file? req.file.filename : null;

        // Generate registrationId: find the max registrationId and increment
        let lastStudent = await Student.findOne({}, {}, { sort: { registrationId: -1 } });
        let registrationId = lastStudent && lastStudent.registrationId ? lastStudent.registrationId + 1 : 3000;

        const student = new Student({
            name,
            class: studentClass,
            division,
            medium,
            dateOfBirth: dob,
            age,
            gender,
            address,
            fatherName,
            motherName,
            bloodGroup,
            phoneNumber,
            whatsappNumber,
            photo,
            agreedToTerms,
            registrationId
        })
        await student.save();
        res.status(201).json({ message: "Student created successfully", student, registrationId });
    } catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({ message: "Create student failed" });
        
    }
}

// Student login
export const loginStudent = async (req, res) => {
    try {
        const { registrationId, dateOfBirth } = req.body;
        const student = await Student.findOne({ registrationId: Number(registrationId) });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        const dob = new Date(student.dateOfBirth);
        const inputDob = new Date(dateOfBirth);
        if (
            dob.getFullYear() === inputDob.getFullYear() &&
            dob.getMonth() === inputDob.getMonth() &&
            dob.getDate() === inputDob.getDate()
        ) {
            return res.status(200).json({ message: "Login successful", student });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error logging in student:", error);
        res.status(500).json({ message: "Login failed" });
    }
};
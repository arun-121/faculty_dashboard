const mongoose = require('mongoose');
const facultyUIDSchema = mongoose.Schema({
    name: String,
    email: String,
    uid: String
})
const facultyDetails = mongoose.Schema({
    uid: String,
    salutation: String,
    name: String,
    gender: String,
    photo: String,
    signature: String,
    panNo: Number,
    aadharNo: Number,
    aicteId: Number,
    annaUniversityId: Number

})

const facultyPersonalData = mongoose.Schema({
    uid: String,
    dob: Date,
    fatherName: String,
    motherName: String,
    maritalStatus: String,
    marriageDate: Date,
    spouseName: String,
    spouseQualification: String,
    kids: Number,
    isStudyingInBAG: Boolean,
    relationStudyingInBIT: Boolean,
    nomineeName: String,
    nomineeRelation: String,
    nomineeAge: Number,
    nomineeAadhar: Number,
    religion: String,
    community: String,
    caste: String,
    nationality: String,
    address: String,
    permanentAddress: String,
    personalMail: String,
    officialMail: String,
    mobileNumber: Number,
    whatsAppNumber: Number,
    facebookProfile: String,
    instagramProfile: String,
    linkedinProfile: String


})


const degreeSchema = new mongoose.Schema({
    degree: { type: String, required: true },
    areaOfSpecialization: String,
    percentageOrCGPA: Number,
    class: String,
    institution: String,
    instituteType: { type: String, enum: ['Private', 'State Govt.', 'Central Govt.', 'Foreign'] },
    university: String,
    dateOfReceiving: Date
});

const qualificationSchema = new mongoose.Schema({
    uid: { type: String, required: true },
    degrees: [degreeSchema]
});



const QualificationModel = mongoose.model('Qualification', qualificationSchema);

const facultyUIDModel = mongoose.model("facultyEntry", facultyUIDSchema)
const facultyPersonalModel = mongoose.model("facultyPersonal", facultyPersonalData)
const facultyDetailsModel = mongoose.model("facultyDetail", facultyDetails)
module.exports = { facultyUIDModel, facultyDetailsModel, facultyPersonalModel, QualificationModel };

const { facultyUIDModel, facultyDetailsModel, facultyPersonalModel, QualificationModel } = require("../model/userModel");
console.log(facultyUIDModel, facultyDetailsModel, facultyPersonalModel);

module.exports.login = (req, res, next) => {
    res.status(200).send("login");
};

module.exports.signin = (req, res, next) => {
    res.status(200).send("signin");
};

module.exports.saveuid = async (req, res, next) => {
    const { uid, email, name } = req.body;
    if (uid === undefined)
        return res.status(404).send("uid required");

    try {
        console.log(email, name, uid);
        const result = await facultyUIDModel.find({ uid: uid });
        if (result.length == 0) {
            await facultyUIDModel.create({ name: name, email: email, uid: uid });
            return res.status(200).json({ "status": "user created" });
        } else {
            return res.status(200).send("User already exists");
        }
    } catch (error) {
        console.error("Error saving UID:", error);
        return res.status(500).send("Internal Server Error");
    }
};



module.exports.updateDegrees = async (req, res) => {
    try {
        const { uid, degree } = req.body;

        // Check if the qualification with the given uid exists
        let qualification = await QualificationModel.findOne({ uid });

        if (!qualification) {
            // If qualification with the given uid doesn't exist, create a new one
            qualification = new QualificationModel({ uid, degrees: [] });
        }
        const existingDegreeIndex = qualification.degrees.findIndex(d => d.degree === degree.degree);

        if (existingDegreeIndex === -1) {
            // If the degree doesn't exist, add it to the degrees array
            qualification.degrees.push(degree);
        } else {
            // If the degree already exists, update it
            qualification.degrees[existingDegreeIndex] = degree;
        }

        // Save the updated qualification
        const updatedQualification = await qualification.save();

        res.status(200).json(updatedQualification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
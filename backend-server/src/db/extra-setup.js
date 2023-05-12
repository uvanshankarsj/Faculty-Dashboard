function applyExtraSetup(sequelize) {
    const { student, faculty, events,user} = sequelize.models;

    // each event has one faculty
    faculty.hasMany(events, { foreignKey: "facultyId" });
    events.belongsTo(faculty, { foreignKey: "facultyId" });

    // each event has one student
    student.hasMany(events, { foreignKey: "studentId" });
    events.belongsTo(student, { foreignKey: "studentId" });
}

module.exports = { applyExtraSetup };
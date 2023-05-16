const n_iters = 10;

async function fillDummyData() {
  const { models } = require("../db");
  const { department,designation,adminDepartment,projectType,projectStatus} = require("../db/constant");
  const { hashPassword } = require("../utils/utils");

  const facultyData = [];
  const studentData = [];
  const adminData = [];
  const projectData = [];

  for (let i = 0; i < n_iters; i++) {
    // const startDate = new Date();
    // const endDate = new Date();
    // const newStartDate = startDate.toDateString();
    // const newEndDate = endDate.toDateString();
    facultyData.push({
      facultyId: Math.floor(Math.random() * 1000000000),
      name: `faculty${i}`,
      email: `fac${i}@cb.amrita.edu`,
      password: await hashPassword(`password${i}`),
      department: department[Math.floor(Math.random() * department.length)],
      designation: designation[Math.floor(Math.random() * designation.length)],
      phoneNumber: `123456789${i}`,
      papers: Math.floor(Math.random() * 10),
      publications: Math.floor(Math.random() * 10),
      citations: Math.floor(Math.random() * 10),
      projects: Math.floor(Math.random() * 10),
    });
    studentData.push({
      studentId: Math.floor(Math.random() * 1000000000),
      name: `student${i}`,
      email: `student${i}@cb.students.amrita.edu`,
      department: department[Math.floor(Math.random() * department.length)],
      year: Math.floor(Math.random() * 4) + 1,
      rollNumber: `123456789${i}`,
      phoneNumber: `123456789${i}`,
    });
    adminData.push({
      adminId: Math.floor(Math.random() * 1000000000),
      name: `admin${i}`,
      email: `admin${i}@admin.com`,
      password: await hashPassword(`password${i}`),
      department: adminDepartment[Math.floor(Math.random() * adminDepartment.length)],
    });
    projectData.push({
      projectTitle: `project${i}`,
      projectDescription: `project${i} description`,
      projectDomain: department[Math.floor(Math.random() * department.length)],
      projectStartDate: new Date().toISOString().split("T")[0],
      projectEndDate: new Date().toISOString().split("T")[0],
      projectType: projectType[Math.floor(Math.random() * projectType.length)],
      projectStatus: projectStatus[Math.floor(Math.random() * projectStatus.length)],
      MentorId: Math.floor(Math.random() * 1000000000),
      MentorName: `faculty${i}`,
    });

  }

  try {
    await models.faculty.bulkCreate(facultyData);
    await models.student.bulkCreate(studentData);
    await models.admin.bulkCreate(adminData);
    await models.project.bulkCreate(projectData);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { fillDummyData };

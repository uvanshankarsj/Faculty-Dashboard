const n_iters = 10;

async function fillDummyData() {
  const { models } = require("../db");
  const { department,designation,adminDepartment,projectType,projectStatus,courseMode,courseStatus,courseType} = require("../db/constant");
  const { hashPassword } = require("../utils/utils");

  const facultyData = [];
  const studentData = [];
  const adminData = [];
  const projectData = [];
  const starredeventsData = [];
  const eventsData = [];
  const courseData = [];
  for (let i = 1; i < n_iters+1; i++) {
    courseData.push({
      courseName: `course${i}`,
      courseCode: `course${i}`,
      courseDescription: `course${i}`,
      courseDepartment: department[Math.floor(Math.random() * department.length)],
      courseStartDate: new Date(),
      courseEndDate: new Date(),
      courseCredits: Math.floor(Math.random() * 5),
      courseMode: courseMode[Math.floor(Math.random() * courseMode.length)],
      courseType: courseType[Math.floor(Math.random() * courseType.length)],
      courseStatus: courseStatus[Math.floor(Math.random() * courseStatus.length)],
    });

    facultyData.push({
      facultyId: i,
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
      email: `admin${i}@cb.amrita.edu`,
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
      MentorId: Math.floor(Math.random() * 10)+1,
      MentorName: `faculty${i}`,
    });
    eventsData.push({
      name: `event${i}`,
      date: new Date(),
      facultyId: Math.floor(Math.random() * n_iters) + 1,
      startTime: new Date(),
      endTime: new Date(),
    });
    starredeventsData.push({
      eventId: Math.floor(Math.random() * n_iters) + 1,
      facultyId: Math.floor(Math.random() * n_iters) + 1,
      eventName : `event${i}`,
    });

  }

  try {
    await models.faculty.bulkCreate(facultyData);
    await models.student.bulkCreate(studentData);
    await models.admin.bulkCreate(adminData);
    await models.project.bulkCreate(projectData);
    await models.events.bulkCreate(eventsData);
    await models.starredevents.bulkCreate(starredeventsData);
    await models.course.bulkCreate(courseData);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { fillDummyData };

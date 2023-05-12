const n_iters = 10;

async function fillDummyData() {
  const { models } = require("../db");
  const { department, eventType ,day ,eventStatus,role} = require("../db/constant");
  const { hashPassword } = require("../utils/utils");

  const facultyData = [];
  const studentData = [];
  const adminData = [];
  const eventsData = [];
  const userData = [];
  const crewData = [];
  const starredeventsData = [];

  for (let i = 0; i < n_iters; i++) {
    facultyData.push({
      name: `faculty${i}`,
      email: `email${i}@email.com`,
      password: await hashPassword(`password${i}`),
      department: department[Math.floor(Math.random() * department.length)],
      phoneNumber: `123456789${i}`,
    });
    studentData.push({
      name: `student${i}`,
      email: `student${i}@student.com`,
      password: await hashPassword(`password${i}`),
      department: department[Math.floor(Math.random() * department.length)],
      year: Math.floor(Math.random() * 4) + 1,
      rollNumber: `123456789${i}`,
      phoneNumber: `123456789${i}`,
    });
    adminData.push({
      name: `admin${i}`,
      email: `admin${i}@admin.com`,
      password: await hashPassword(`password${i}`),
      department: department[Math.floor(Math.random() * department.length)],
    });
    eventsData.push({
      name: `event${i}`,
      description: `description${i}`,
      date: new Date(),
      department: department[Math.floor(Math.random() * department.length)],
      facultyId: Math.floor(Math.random() * n_iters) + 1,
      studentId: Math.floor(Math.random() * n_iters) + 1,
      type: eventType[Math.floor(Math.random() * eventType.length)],
      startTime: new Date(),
      endTime: new Date(),
      venue: `venue${i}`,
      day: day[Math.floor(Math.random() * day.length)],
      status: eventStatus[Math.floor(Math.random() * eventStatus.length)],
    });
    userData.push({
      name: `user${i}`,
      email: `user${i}@user.com`,
      password: await hashPassword(`password${i}`),
      avatar: `avatar${i}`,
    });
    crewData.push({
      name: `crew${i}`,
      department: department[Math.floor(Math.random() * department.length)],
      role: role[Math.floor(Math.random() * role.length)],
    });
    starredeventsData.push({
      userId: Math.floor(Math.random() * n_iters) + 1,
      eventId: Math.floor(Math.random() * n_iters) + 1,
    });

  }

  try {
    await models.faculty.bulkCreate(facultyData);
    await models.student.bulkCreate(studentData);
    await models.admin.bulkCreate(adminData);
    await models.events.bulkCreate(eventsData);
    await models.user.bulkCreate(userData);
    await models.crew.bulkCreate(crewData);
    await models.starredevents.bulkCreate(starredeventsData);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { fillDummyData };

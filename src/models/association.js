const { Classes } = require("./class.model");
const { TeachersClasses } = require("./class_teacher.model");
const { Meeting } = require("./meeting.model");
const { Parent } = require("./parent.model");
const { StudentParent } = require("./parent.student.model");
const { Student } = require("./student.model");

Student.belongsTo(Classes, { foreignKey: "class_id",as:"class" })

//teacher classes accociation
TeachersClasses.belongsTo(Classes, { foreignKey: "class_id" })
TeachersClasses.belongsTo(Classes, { foreignKey: "teacher_id" })

//classes accoiation
Classes.hasMany(Student)

// Meeting belongs to the student and parents
Meeting.belongsTo(StudentParent, { foreignKey: "student_parent_id" })

// student parent relation to student and parent
StudentParent.belongsTo(Student, { foreignKey: "student_id" })
StudentParent.belongsTo(Parent, { foreignKey: "parent_id" })
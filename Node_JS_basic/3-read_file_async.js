const { readFile } = require("node:fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
        return; 
      }

      const lines = data.split("\n").filter((line) => line.trim().length > 0);

      lines.shift();

      console.log(`Number of students: ${lines.length}`);

      const fields = {};

      lines.forEach((line) => {
        const student = line.split(",");
        const firstName = student[0];
        const field = student[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ", ",
          )}`,
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;

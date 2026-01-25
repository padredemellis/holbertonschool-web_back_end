import fs from "fs";

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error("Cannot load the database"));
      return;
    }

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
        return;
      }

      const lines = data.trim().split("\n");
      if (lines.length <= 1) {
        resolve({});
        return;
      }

      const students = {};

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === "") continue;

        const [firstname, , , field] = line.split(",");

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }

      // Ordenar los campos alfabéticamente
      const sortedFields = Object.keys(students).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase()),
      );

      const result = {};
      sortedFields.forEach((field) => {
        result[field] = students[field];
      });

      resolve(result);
    });
  });
};

export default readDatabase;

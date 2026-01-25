const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const port = 1245;

const countStudents = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const lines = data.trim().split("\n");

    const students = lines.slice(1).filter((line) => line.trim() !== "");

    const fields = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(",");

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    let result = `Number of students: ${students.length}\n`;

    for (const [field, names] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${
        names.length
      }. List: ${names.join(", ")}\n`;
    }

    return result.trim();
  } catch (error) {
    throw new Error("Cannot load the database");
  }
};

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

app.get("/students", async (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    res
      .status(500)
      .send("This is the list of our students\nCannot load the database");
    return;
  }

  try {
    const studentsInfo = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;

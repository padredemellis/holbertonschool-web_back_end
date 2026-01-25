import readDatabase from "../utils";

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv[2];

    try {
      const students = await readDatabase(databasePath);

      let message = "This is the list of our students\n";

      // Construir mensaje ordenado por campo alfabéticamente
      for (const [field, names] of Object.entries(students)) {
        message += `Number of students in ${field}: ${
          names.length
        }. List: ${names.join(", ")}\n`;
      }

      response.status(200).send(message.trim());
    } catch (error) {
      response.status(500).send("Cannot load the database");
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv[2];

    // Validar que el major sea CS o SWE
    if (major !== "CS" && major !== "SWE") {
      response.status(500).send("Major parameter must be CS or SWE");
      return;
    }

    try {
      const students = await readDatabase(databasePath);

      if (!students[major]) {
        response.status(200).send(`List: `);
        return;
      }

      response.status(200).send(`List: ${students[major].join(", ")}`);
    } catch (error) {
      response.status(500).send("Cannot load the database");
    }
  }
}

export default StudentsController;

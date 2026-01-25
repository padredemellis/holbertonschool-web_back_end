import express from "express";
import router from "./routes/index";

const app = express();
const port = 1245;

// Usar el router
app.use("/", router);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;

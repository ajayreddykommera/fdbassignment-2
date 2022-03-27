const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 5001;

//MIDDLEWARE -> DISALBING CORS AND USED FOR JSON OUTPUT
app.use(express.json(), cors());
//IMPORT ROUTES
const instructorRoute = require("./routes/instructor");
const courseRoute = require("./routes/course");
const departmentRoute = require("./routes/department");

app.get("/", (req, res) => {
  res.send("Hey its working !!");
});

app.listen(PORT, () => console.log(`server up and running at ${PORT}`));

//ROUTE MIDDLEWARE
app.use("/instructor", instructorRoute);
app.use("/course", courseRoute);
app.use("/department", departmentRoute);

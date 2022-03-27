const router = require("express").Router();
const db = require("../dbConfig");

router.get("/", async (req, res) => {
  let sql = "select * from department";
  const [r, _] = await db.execute(sql);
  res.send(r);
});

router.get("/dept_name/:id", async (req, res) => {
  const id = req.params.id;
  let sql = `select * from department where dept_name="${id}"`;
  const [r, _] = await db.execute(sql);
  res.send(r);
});

router.post("/add", async (req, res) => {
  const { dept_name, building, budget } = req.body;
  let sql = `insert into department values('${dept_name}','${building}',${budget})`;
  const [r, _] = await db.execute(sql);
  res.send(r);
});

router.post("/update_budget", async (req, res) => {
  const { dept_name, building, budget } = req.body;
  let sql = `UPDATE department SET budget =${budget} WHERE dept_name="${dept_name}"`;
  const [r, _] = await db.execute(sql);
  res.send(r);
});

router.delete("/dept_name/:id", async (req, res) => {
  const id = req.params.id;
  let sql = `DELETE FROM department WHERE dept_name="${id}"`;
  const [r, _] = await db.execute(sql);
  res.send(r);
});

module.exports = router;

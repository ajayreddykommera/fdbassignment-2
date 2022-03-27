const router = require("express").Router();
const db = require("../dbConfig");

router.get("/", async (req, res) => {
  let sql = "select * from course";
  const [r, _] = await db.execute(sql);
  res.send(r);
});

module.exports = router;

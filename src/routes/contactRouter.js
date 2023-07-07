const express = require("express");
const router = express.Router();

router.post("/formulario", (req, res) => {
  console.log(req.body);
  res.send("Mensaje enviado " + req.body.comentario);
});

// router.put("/update", (req, res) => {
//       console.log(req.body);
//   res.send("Producto modificado" + req.body.nombre);
// });

module.exports = router;

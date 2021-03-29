let word = "";

function chooseWord(req, res) {
  const methods = {
    GET() {
      if (!word) {
        res.status(404).json({ message: "There's no word available" });
      }
      res.json({ word });
    },
    POST() {
      word = req.body.word;
    },
  };

  const method = methods[req.method];
  if (method) method();
}

export default chooseWord;

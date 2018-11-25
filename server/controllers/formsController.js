const db = require("../database/models/");

module.exports = {
  //you are now looking at : "localhost:3001/api/form"
  findAll: function(req, res) {
    db.Form
      .find(req.query)
      .sort({ date: -1 })
      .then(dbForm => res.json(dbForm))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Form
      .findById(req.params.id)
      .then(Form => res.json(Form))
      .catch(err => res.status(422).json(err));
  },
  //update form under target id
  update: function(req, res) {
    db.Form
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(Form => res.json(Form))
      .catch(err => res.status(422).json(err));
  },
  //POSTMAN ROUTES
  // create form under target id
  create: function(req, res) {
    db.Form
      .create(req.body)
      .then(function (dbCoursework) {
        return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { form: dbCoursework._id } }, { new: false });
      })
      .then(function (dbStudent) {
        res.json(dbStudent);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  // delete form under target id
  remove: function(req, res) {
    db.Form
      .findById({ _id: req.params.id })
      .then(Form => Form.remove())
      .then(Form => res.json(Form))
      .catch(err => res.status(422).json(err));
  }
};

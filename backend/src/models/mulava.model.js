
module.exports = function (app) {
  const modelName = 'mulava';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name : {
        type: String,
        required: [true, ' Name is required']

    },
    description : {
      type: String,
      required: [true, ' Description is required']

  },
  numberTasks : {
    type: String,
    required: [true, ' Number of Tasks is required']
  },
    year : {
      type: String,
      required: [true, 'Tasks Deadline is required']
    },
  }, {
    timestamps: true
  });


  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model(modelName, schema);
};

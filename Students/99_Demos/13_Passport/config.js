
const conn = {
  authInfo: { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      auth: {
          authSource: 'admin'
      },
      user: 'acc',
      pass: 'acc_rocks_2020'
  },
  url: 'mongodb://mongo.accsoftwarebootcamp.com',
  db: 'pm_passport'
}

exports.conn = conn;

const PREFIX_API= '/api/v1/'
const user = require('../routes/user.route');
const report = require('../routes/report.route');
const task = require('../routes/task.route');
const auth = require('../routes/auth.route');

const cors=require('cors');

// Middleware to verify JWT
const authenticate = function (req, res, next) {
  console.log("authenticate method")
  console.log(req.headers)
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  mainModule.jwt.verify(token, mainModule.constants.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Failed to authenticate token' });
    req.userId = decoded.id;
    next();
  });
};

module.exports = {
    usingMiddlewares(app) {
        app.use(cors());
        app.use(mainModule.express.urlencoded({ extended: true }))
        app.use(mainModule.express.json()); 
        app.use(mainModule.errorhandler());
        app.use(PREFIX_API + 'users', user);
        app.use(PREFIX_API + 'reports', report);
        app.use(PREFIX_API + 'tasks', task);
        app.use(PREFIX_API + 'auth', auth);
    },
    authenticate(req, res, next) {
      authenticate(req, res, next)
    }
};
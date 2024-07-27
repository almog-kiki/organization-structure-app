const router = mainModule.express.Router();
const user_controller = require('../controllers/user.controller');

router.use((req, res, next) => {
  require('../lib/middlewares').authenticate(req, res, next)
})

router.get('/managers', user_controller.findAllManagers);
router.get('/me', user_controller.findMe);
router.get('/employees',user_controller.findEmployees)

module.exports = router;

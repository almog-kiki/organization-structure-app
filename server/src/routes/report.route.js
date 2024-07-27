const router = mainModule.express.Router();
const report_controller = require('../controllers/report.controller');

router.use((req, res, next) => {
  require('../lib/middlewares').authenticate(req, res, next)
})

router.get('/',report_controller.findAll);

module.exports = router;
const router = mainModule.express.Router();
const task_controller = require('../controllers/task.controller');

router.use((req, res, next) => {
  require('../lib/middlewares').authenticate(req, res, next)
})

router.get('/', task_controller.findAll);
router.post('/assign', task_controller.assignTo);

module.exports = router;
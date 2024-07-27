const models = require('../models')


exports.findAll = async (req, res) =>{
  try {
  	userId = req.userId
    user = await models.User.findOne({ where: {id: userId}, 
        include: [{
        model: models.User,
        attributes: ['position']
      }]
    });
    const tasks = await models.Task.findAll({where: { assignedTo: userId}});
  	mainModule.requestUtils.successResponse(res, tasks, "")
  } catch (error) {
  	console.error("error in task findAll", error)
  	mainModule.requestUtils.failureResponse(res, error, "error when get tasks")
  }
}

exports.assignTo = async (req, res) => {
  try {
    const assignTo = req.body.assignTo
    const taskText =  req.body.taskText
    const dueDate = req.body.dueDate || new Date(Date.now() + (60 * 86400000))
    const task = await models.Task.build({
      assignedTo: assignTo,
      taskText: taskText,
      assignDate: new Date(),
      dueDate: dueDate
    })
    await task.save()
    mainModule.requestUtils.successResponse(res, task, "")
  } catch (error) {
    console.error(`error cannot assign task to ${req.body.assignTo}`, error)
    mainModule.requestUtils.failureResponse(res, error, "error when assignTo")
  }

}
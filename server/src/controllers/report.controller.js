const models = require('../models')

async function getReportsByManagerId(managerId) {
  try {
    const employees = await models.User.findAll({
      where: { managerId: managerId },
      attributes: ['id']
    });

    const employeeIds = employees.map(employee => employee.id);
    // Find all reports from these employees
    const reports = await models.Report.findAll({
      where: {
        employeeId: employeeIds
      }
    });
    return reports;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
}

exports.findAll = async (req, res) =>{
  try {
    userId = req.userId
    user =  await models.User.findOne({ where: {id: userId}, 
        include: [{
        model: models.User,
        attributes: ['position']
      }]
    });

    if (user.position == 'Manager') {
        const reports = await getReportsByManagerId(userId)
        mainModule.requestUtils.successResponse(res, reports, "")
    } else {
      throw "the user cannot see reports"
    }
    
  } catch (error) {
  	console.error("error in Report findAll", error)
  	mainModule.requestUtils.failureResponse(res, error, "error when get reports")
  }
}



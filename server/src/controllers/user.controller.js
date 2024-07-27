const models = require('../models')

exports.findAllManagers = async (req, res) =>{ 
  try {
  	 const managres = await models.User.findAll({
  	 	where: {
    		position: 'Manager',
  		},
	    order: [ [ 'createdAt', 'DESC' ]],
	  });
  	mainModule.requestUtils.successResponse(res, managres, "New user created ")
  } catch (error) {
  	console.error("error in findAllManagers", error)
  	mainModule.requestUtils.failureResponse(res, error, "error when get all managres")
  }
}


async function getEmployeesByManagerId(managerId) {
  try {
    const employees = await models.User.findAll({
      where: { managerId: managerId },
      attributes: ['id', 'firstName', 'lastName', 'position']
    });

    return employees;
  } catch (error) {
    console.error('Error fetching employees', error);
    throw error;
  }
}

exports.findEmployees = async (req, res) => {
try {
    userId = req.userId
    user = await models.User.findOne({ where: {id: userId} });

    if (user.position == 'Manager') {
       const employees = await getEmployeesByManagerId(userId)
        mainModule.requestUtils.successResponse(res, employees, "")
    } else {
      throw "the user cannot see employees"
    }
    
  } catch (error) {
    console.error("error in users findEmployees", error)
    mainModule.requestUtils.failureResponse(res, error, "error when get employees")
  }
}

exports.findMe = async (req, res) => {
  try {
    user = await models.User.findOne({ where: {id: req.userId}, 
        attributes : ['id','firstName', 'lastName', 'position', 'managerId']
    });

    mainModule.requestUtils.successResponse(res, user, "")    
  } catch (error) {
    console.error("error in users findEmployees", error)
    mainModule.requestUtils.failureResponse(res, error, "error when get employees")
  }
}
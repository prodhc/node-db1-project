const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const err = { status: 400 }
  const { name, budget } = req.body
  if (name === undefined || budget === undefined) {
    err.message = 'name and budget required'
  } else if (typeof name !== 'string') {
    err.message = 'name must be a string'
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    err.message = 'name must be longer than 3, shorter than 100'
  } else if (typeof budget !== 'number' || isNaN(budget)) {
    err.message = 'budget must be a number'
  } else if (budget < 0 || budget > 1000000) {
    err.message = 'budget must be a number'
  }

  if (err.message) {
    next(err)
  } else {
    next()
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checkAccountNameUnique middleware')
  next()
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id)
    if (!account) {
      next({ status: 404, message: 'not found'})
    } else {
      req.account = account
      next()
    }
  } catch(err) {
    next(err)
  }
}

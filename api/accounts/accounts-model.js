const db = require('../../data/db-config')


const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).first()
}

const create = async account => {
  const [id] = await db('accounts').insert(account, ['id'])
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

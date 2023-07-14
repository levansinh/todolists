import express from 'express'

import { todoController} from '../controllers/todoController.js'

const router = express.Router()

router.delete('/:id',todoController.deleteTodo)

router.put('/:id',todoController.updateTodo)
router.post('/',todoController.createTodo)

router.get('/:id',todoController.getOneTodo)
router.get('/',todoController.getAllTodo)

export default router
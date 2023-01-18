import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users2.js';


const router = express.Router();


//All routes start with slash users by default
router.get('/', getUsers)

router.post('/', createUser);

router.get ('/:id', getUser);

router.delete ('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
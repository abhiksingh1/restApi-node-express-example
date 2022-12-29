import express from 'express';
const router = express.Router();
import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/users.js';


router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/', addUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);



export default router;
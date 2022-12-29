
import { v4 as uuidv4 } from 'uuid';
let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    if(user == null){
        res.send('No user find with given id!')
    }else{
        res.send(user);
    }
}

export const addUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`${user.firstName} added successfully!`)
}

export const updateUser = (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    if(user == null){
        res.send('No user find with given id!')
    }else{
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.mobNumber = req.body.mobNumber;
        res.send(`User with id: ${req.params.id} is updated!`);
    }
}

export const deleteUser = (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    if(user == null){
        res.send('No user find with given id!')
    }else{
        users = users.filter(obj => obj.id !== req.params.id);
        res.send(`User with id: ${req.params.id} is deleted!`);
    }
}

import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Amadi",
        lastName: "Nwosu",
        age: 32
    },
    {
        firstName: "Dabarechi",
        lastName: "Njoku",
        age: 25
    }      
]

//All routes start with slash users already
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

router.post('/', (req, res) => {

    const user = (req.body);

    users.push(user);

    res.send(`Username with the name ${user.firstName} added to the database.`);
});

export default router;
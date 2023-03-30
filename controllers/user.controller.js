import { UserModel } from "./ModelController.js";
import { hashPassword, checkPassword } from "../scripts/HashFunctions.js";

const mailRegexp = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
const passwordRegexp = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

const login = async (req, res) => {
    try {
        const { email: emailIn, password } = req.body;
        const {
            name,
            email,
            points,
            password: hashPasswd,
            _id,
        } = await UserModel.findOne({ email: emailIn });

        const user = { name, email, points };
        const correct = await checkPassword(password, hashPasswd);

        if (!correct) {
            res.status(400).send("Incorrect password");
            return;
        }

        await UserModel.findOneAndUpdate(
            { _id: _id },
            { lastLogin: Date.now() }
        );

        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const create = async (req, res) => {
    try {
        const { nickname: name, email, password: passwordIn } = req.body;

        const userEm = await UserModel.find({ email: email });
        if (userEm.includes(email)) {
            res.status(400).send("Email is already taken");
            return;
        }

        const username = await UserModel.find({ name: name });
        if (username.includes(name)) {
            res.status(400).send("Name is already taken");
            return;
        }

        if (!mailRegexp.test(email)) {
            res.status(400).send("Did not match email requirements");
            return;
        }

        if (!name) {
            res.status(400).send("Please provide name");
            return;
        }

        // if (!passwordRegexp.test(password)) {
        // 	res.status(400).send("Did not match password requirements");
        // 	return;
        // }

        let points = 0;
        const { hash: password, err } = await hashPassword(passwordIn);

        if (err) {
            res.status(500).send("Error while hashing password");
            return;
        }

        const user = new UserModel({ name, email, password, points });
        await user.save();

        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const getOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const getAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const getLeaderboard = async (req, res) => {
    try {
        const users = await UserModel.find();

        users.sort((a, b) => b.points - a.points);
        const leaderboard = users.map((user, index) => {
            return {
                name: user.name,
                points: user.points,
                rank: index + 1,
            };
        });

		res.status(200).send(leaderboard);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const update = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const remove = async (req, res) => {};

const UserController = {
    login,
    create,
    getOne,
    getAll,
    getLeaderboard,
    update,
    remove,
};

export default UserController;

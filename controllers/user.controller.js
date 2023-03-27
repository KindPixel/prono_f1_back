import { UserModel } from "./ModelController.js";
import { hashPassword, checkPassword } from "../scripts/HashFunctions.js";

const mailRegexp = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
const passwordRegexp = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

export const UserController = {
	async login(req, res) {
        try {
            const { email: emailIn, password } = req.body;
            const {name, email, points} = await UserModel.findOne({ email: emailIn });

            const correct = await checkPassword(password, user.password);
			delete user.password;

            if (correct) res.status(200).send(user);
            else res.status(400).send("Incorrect password");
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async create(req, res) {
        try {
            const { nickname: name, email, password: passwordIn } = req.body;

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
    },

    async getOne(req, res) {
        try {
            const user = await UserModel.findById(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },

	async getLeaderboard(req, res) {
		try {
			const users = await UserModel.find();
			delete users.password;
			delete users.email;
			users.sort((a, b) => b.points - a.points);

			res.status(200).send(users);
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	},

    async update(req, res) {
        try {
            const user = await UserModel.findByIdAndUpdate(
                req.params.id,
                req.body
            );
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },


};

export default UserController;

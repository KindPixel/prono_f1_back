import { UserModel } from "../../controllers/ModelController.js";

export const UserFunc = {
    async create(req, res) {
        try {
            const { name, email, password } = req.body;
            let points = 0;

            const user = new UserModel({ name, email, password, points });
            await user.save();
            res.status(200).send(user);
        } catch (error) {
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

export default UserFunc;

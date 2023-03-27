import { User as UserModel } from "../../models/User.js";

export const UserFunc = {
    async create(req, res) {
        const { name, email, password, points } = req.body;
        const user = new UserModel({ name, email, password, points });
        await user.save();
        res.status(201).send(user);
    },
    async getOne(req, res) {
        const user = await UserModel.findById(req.params.id);
        res.status(200).send(user);
    },
    async update(req, res) {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).send(user);
    },
};

export default UserFunc;
import { Pilot as PilotModel } from "../models/Pilot.js";

export const PilotFunc = {
    async create(req, res) {
        const { name, email, password, points } = req.body;
        const user = new PilotModel({ name, email, password, points });
        await user.save();
        res.status(201).send(user);
    },
    async getOne(req, res) {
        const user = await PilotModel.findById(req.params.id);
        res.status(200).send(user);
    },
    async update(req, res) {
        const user = await PilotModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).send(user);
    },
};

export default PilotFunc;
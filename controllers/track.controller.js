// import { Track as TrackModel } from "../models/Track.js";

// export const TrackFunc = {
//     async create(req, res) {
//         const { name, email, password, points } = req.body;
//         const user = new TrackModel({ name, email, password, points });
//         await user.save();
//         res.status(201).send(user);
//     },
//     async getOne(req, res) {
//         const user = await TrackModel.findById(req.params.id);
//         res.status(200).send(user);
//     },
//     async update(req, res) {
//         const user = await TrackModel.findByIdAndUpdate(req.params.id, req.body);
//         res.status(204).send(user);
//     },
// };

// export default TrackFunc;
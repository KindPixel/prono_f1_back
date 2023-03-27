import { tracks } from "MongoConnect";

//? Create a document
const sampleTrack = {
    name: "Monaco",
    country: "Monaco",
    length: 3.337,
    laps: 78,
    firstGP: 1929,
};

const addTrack = (pilot) => {
    //? Insert a document
    tracks.insertOne(pilot, (err, res) => {
        if (err) throw err;
        console.log("Track inserted");
    });
};

const findTrackByName = (name) => {
    tracks.findOne({ name: name }, (err, res) => {
        if (err) throw err;
        console.log(res);
    });
};

const updateTrack = (name, team, track) => {
	const arg = {var: "name", value: name};
    if (track == null) {
        console.log("No track provided, using name and team");
		arg.var = "team";
    } else if (name == null) {
        console.log("No track name provided, using team");
    } else if (team == null) {
        console.log("No team provided, using name");
    } else if (name == null && name == null && team == null) {
    } else {
        //? Update a document
        tracks.updateOne(
            { name: name },
            { $set: { wins: 101 } },
            (err, res) => {
                if (err) throw err;
                console.log("Track updated");
            }
        );
    }
};

const deleteTrack = (name) => {
    //? Delete a document
    tracks.deleteOne({ name: name }, (err, res) => {
        if (err) throw err;
        console.log("Track deleted");
    });
};

export default { addTrack, findTrackByName, updateTrack, deleteTrack };

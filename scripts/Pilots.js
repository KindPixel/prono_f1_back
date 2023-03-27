import { pilots } from "MongoConnect";

const addPilot = (pilot) => {
    //? Insert a document
    pilots.insertOne(pilot, (err, res) => {
        if (err) throw err;
        console.log("Pilot inserted");
    });
};

const findPilotByName = (name) => {
    pilots.findOne({ name: name }, (err, res) => {
        if (err) throw err;
        console.log(res);
    });
};

const findPilotsByTeam = (team) => {
    pilots.find({ team: team }).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
    });
};

const updatePilot = (pilot) => {
    const name = pilot.name;
    var err = "";

    if (pilot == null || pilot == undefined) {
        err = "No pilot provided";
        console.log(err);
        return err;
    } else {
        pilots.updateOne({ name: name }, { $set: pilots }, (err, res) => {
            if (err) throw err;
            console.log("Track updated");
        });
    }
};

const deletePilot = (pilot) => {
    //? Delete a document
    pilots.deleteOne({ name: "Lewis Hamilton" }, (err, res) => {
        if (err) throw err;
        console.log("Pilot deleted");
    });
};

export default {
    addPilot,
    findPilotsByTeam,
    findPilotByName,
    updatePilot,
    deletePilot,
};

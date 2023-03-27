import { genSalt, hash, compare } from "bcrypt";
const saltRounds = 5; // Ajustez cette valeur pour augmenter ou diminuer la complexité de hachage. Une valeur plus élevée offre une meilleure sécurité, mais prend plus de temps.

export async function hashPassword(password) {
    try {
        const salt = await genSalt(saltRounds);
        const hashedPassword = await hash(password, salt);
        console.log("Hashed password successfully");
        return {hash: hashedPassword, err: null};
    } catch (error) {
		console.error(error);
        return {hash: null, err: error};
    }
}

export async function checkPassword(plainTextPassword, hashedPassword) {
    try {
        const isMatch = await compare(plainTextPassword, hashedPassword);
        console.log(isMatch); // true si les mots de passe correspondent, false sinon
        return isMatch;
    } catch (error) {
        console.error(error);
    }
}

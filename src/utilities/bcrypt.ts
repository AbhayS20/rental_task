import bcrypt from "bcrypt";
const salt_rounds = 10;

export function generate_hash(text: string): Promise<string> {
    return new Promise(function(resolve, reject) {
        bcrypt.hash(text, salt_rounds, function(err, hash) {
            if (err) {
                return reject(err);
            }
            resolve(hash);
        });
    });
}

export function compare_hash(text: string, hash: string): Promise<boolean> {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(text, hash, function(err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
}

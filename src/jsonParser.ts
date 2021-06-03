import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);

export async function jsonParser(file: string): Promise<any>  {
    const data = await readFile(file);
    return JSON.parse(data.toString());
}

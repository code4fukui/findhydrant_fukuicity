import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "http://linkdata.org/api/1/rdf1s9409i/fire_hydrants.csv";
const data = await CSV.fetchJSON(url);
await Deno.writeTextFile("fire_hydrants.csv", CSV.stringify(data));

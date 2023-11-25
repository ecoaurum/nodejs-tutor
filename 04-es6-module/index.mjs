import { season, tempr } from "./named-export.mjs";
import { humidity, isRaning } from "./inlinear.mjs";
import getDataFromServer from './default-export.mjs'
import DEFAULT_SERVER, { USERNAME, PASSWORD } from "./mixed-exports.mjs";

console.log(season);
console.log(tempr);

console.log(humidity);
console.log(isRaning);

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((error) => console.log(error));

console.log(DEFAULT_SERVER);
console.log(USERNAME, PASSWORD);
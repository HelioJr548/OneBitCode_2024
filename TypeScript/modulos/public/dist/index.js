import lodash from 'lodash';
let xwing = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4,
};
console.log(lodash.camelCase(xwing.name));
console.log(lodash.kebabCase(xwing.pilot));
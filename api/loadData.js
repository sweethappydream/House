const data = require("./mockData.json");
const db = require("./model/db");

////////insert data to houses

// let houses = [];
// for(let i = 0; i < data.length; i++) {
//     houses.push({name:data[i].name, picture:data[i].picture});
// }
// db.House.bulkCreate(
//   houses
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

// console.log(Unit);


///////insert data to units

// let units = [];
// for(let i = 0; i < data.length; i++) {
//     for(let j = 0; j < data[i].units.length; j++ ) {
//         units.push({type:data[i].units[j].type, minOccupancy:data[i].units[j].minOccupancy, maxOccupancy:data[i].units[j].maxOccupancy, sqft:data[i].units[j].sqft, house_id:(i+1)});
//     }
// }
// db.Unit.bulkCreate(
//   units
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });


////////insert data to amentities

// let items = [];
// let amenity = [];
// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data[i].units.length; j++) {
//     data[i].units[j].amenities.forEach((item) => {
//       if (!items.includes(item)) {
//         items.push(item);
//       }
//     });
//   }
// }
// items.forEach(item => {
//     amenity.push({name : item});
// })
// console.log(amenity);
// db.Amenity.bulkCreate(amenity)
//   .then((res) => {
//     // console.log(res);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });



////////insert data to unit_amentities

// let items = [];
// let inputs = [];

// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data[i].units.length; j++) {
//     data[i].units[j].amenities.forEach((item) => {
//       if (!items.includes(item)) {
//         items.push(item);
//       }
//     });
//   }
// }

// let k = 0;
// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data[i].units.length; j++) {
//     k++;
//     data[i].units[j].amenities.forEach((item) => {
//       inputs.push({
//         unit_id: k,
//         amenity_id:
//           items.findIndex(function (attr) {
//             return attr == item;
//           }) + 1,
//       });
//     });
//   }
// }

// db.Unit_amenity.bulkCreate(inputs)
//   .then((res) => {
//     // console.log(res);
//   })
//   .catch((e) => {
//     console.log("sdfsdfsdf");
//   });





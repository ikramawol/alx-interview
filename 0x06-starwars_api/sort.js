// The time complexity of this solution is O(nlogn), where n is the number of buildings. This is because the solution involves sorting the distances array, which has a worst-case time complexity of O(nlogn). The rest of the solution involves looping through the distances array, which has a time complexity of O(n). Therefore, the overall time complexity is O(nlogn).
function optimized_route(building, starting) {
  // Add the starting building to the new route
  let new_route = [starting];

  // Create an array to store the distances between the starting building and each other building
  let distances = [];

  // Loop through all buildings (except the starting building)
  for (let i = 1; i < building.length; i++) {
    // Calculate the distance between the starting building and the current building
    let distance = Math.abs(starting - building[i]);

    // Add the distance and index of the building to the distances array as an object
    distances.push({ distance: distance, index: i });
  }

  // Sort the distances array in ascending order based on distance
  distances.sort((a, b) => a.distance - b.distance);

  // Loop through the distances array and add the closest unvisited building to the new route
  for (let i = 0; i < distances.length; i++) {
    let nearest_building_index = distances[i].index;
    let nearest_building = building[nearest_building_index];

    // Check if the nearest building has already been added to the new route
    if (!new_route.includes(nearest_building)) {
      new_route.push(nearest_building);
    }
  }

  // Add the starting building to the end of the new route to complete the cycle
  new_route.push(starting);

  // Return the new route
  return new_route;
}

// test case
let building = [0, 43, 55, 2, 66, 3, 55];
let starting = building[0];
let building2 = [
  0, 456, 56453, 345, 234, 22, 46, 76, 87, 345, 7, 2, 986, 578, 10, 20, 30, 40,
  50, 60, 70, 55, 99, 75, 08,
];
let starting2 = building2[0];
console.log(optimized_route(building, starting));
console.log(optimized_route(building2, starting2));

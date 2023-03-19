// the time complexity of the optimized_route function is O(n^2), which is due to the nested loop used to find the nearest unvisited building at each step. The space complexity of this function is O(n), as we store the new route and the set of unvisited buildings, both of which can grow to the size of the input list.

function optimized_route(building, starting) {
  // Initialize the new route with the starting building
  let new_route = [starting];

  // Create a set of unvisited buildings from the input building list (excluding the starting building)
  let unvisited_buildings = new Set(building.slice(1));

  // Set the current building to the starting building
  let current_building = starting;

  // Loop until all buildings are visited
  while (unvisited_buildings.size > 0) {
    // Initialize nearest building and distance
    let nearest_building = null;
    let nearest_distance = Infinity;

    // Loop through all the buildings
    for (let i = 0; i < building.length; i++) {
      // Check if the building is unvisited
      if (unvisited_buildings.has(building[i])) {
        // Calculate the distance to the building from the current building
        let distance = Math.abs(current_building - building[i]);
        // Check if this building is closer than the previous nearest building
        if (distance < nearest_distance) {
          nearest_building = building[i];
          nearest_distance = distance;
        }
      }
    }

    // Check if a nearest building was found
    if (nearest_building !== null) {
      // Add the nearest building to the new route
      new_route.push(nearest_building);
      // Remove the nearest building from the unvisited set
      unvisited_buildings.delete(nearest_building);
      // Set the current building to the nearest building
      current_building = nearest_building;
    } else {
      // No unvisited buildings could be reached from the current building
      break;
    }
  }
  // Add the starting building to the end of the new route to complete the cycle
  new_route.push(starting);
  // Return the optimized route
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

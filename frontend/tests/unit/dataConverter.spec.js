import dataConverter from "@/../src/utilities/dataConverter";

//create array of objects with dummy data based on amount given in parameter
function createDummyArray(amount, base) {
  let dummyData = [];
  for (let i = 0; i < amount; i++) {
    dummyData.push({
      temp: base + i,
      index: i,
    });
  }
  return dummyData;
}

test("Creates an array with 3 objects with the last object to have a temp of 2", () => {
  const dummyData = createDummyArray(3, 0);
  expect(dummyData.length).toBe(3);
  expect(dummyData[2].temp).toBe(2);
});

test("Extract temperature from array of objects", () => {
  const array = createDummyArray(10, 10);
  const result = dataConverter.extractProperty(array, "temp", 3);
  expect(result).toEqual([10, 11, 12]);
});

test("Take every third object out of array", () => {
  const array = createDummyArray(10, 10);
  const result = dataConverter.threeHourForecast(array, 3);
  expect(result).toHaveLength(3);
  expect(result).toEqual([
    { temp: 10, index: 0 },
    { temp: 13, index: 3 },
    { temp: 16, index: 6 },
  ]);
})

test("Transform kelvin to celsius", () => {
  const result = dataConverter.transformChartTemp([273.15, 294.15, 300], "celsius");
  expect(result).toEqual([0, 21, 27]);
})

test("Transform kelvin to fahrenheit", () => {
  const result = dataConverter.transformChartTemp([230, 270, 400], "fahrenheit");
  expect(result).toEqual([-46, 26, 260]);
})

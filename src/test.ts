jest.mock("command-line-args", () => () => ({ mapFile: "mapTest.txt" }));

const expectedOutput = `{
  \"altitudes\": [
    9,
    5,
    3,
    2,
    1
  ],
  \"drop\": 8,
  \"length\": 5,
  \"route\": [
    {
      \"x\": 2,
      \"y\": 1
    },
    {
      \"x\": 1,
      \"y\": 1
    },
    {
      \"x\": 1,
      \"y\": 2
    },
    {
      \"x\": 2,
      \"y\": 2
    },
    {
      \"x\": 2,
      \"y\": 3
    }
  ]
}`;

test("prints the correct output", (done) => {
  expect.assertions(1);

  const log = process.stdout.write;
  process.stdout.write = jest.fn(() => {
    expect(process.stdout.write).toHaveBeenCalledWith(expectedOutput);
    process.stdout.write = log;
    done();
  });

  require("./");
});

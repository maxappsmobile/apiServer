const { TestScheduler } = require("jest");
const systemInfo = require("./sysinfo");

test("sysinfo test", () => {
  const result = systemInfo();
  expect(result.Total_memory_GB).toBe(15);
});

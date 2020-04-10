// these run before all tests in all test suites (global)
require(`@testing-library/jest-dom/extend-expect`)

// this is just a little hack to silence react warnings that we'll get until we
// upgrade to 16.9: https://github.com/facebook/react/pull/14853
const originalWarn = console.warn

beforeAll(() => {
  console.warn = msg =>
    !msg.toString().includes("https://fb.me/") && originalWarn(msg)
})

afterAll(() => {
  console.warn = originalWarn
})
// end of hack

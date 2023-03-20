// these run before all tests in all test suites (global)
require(`@testing-library/jest-dom/extend-expect`);

// this is just a little hack to silence react warnings that we'll get until we
// upgrade to 16.9: https://github.com/facebook/react/pull/14853
const originalWarn = console.warn;

beforeAll(() => {
  console.warn = (msg) =>
    !msg.toString().includes("https://fb.me/") && originalWarn(msg);

  // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
  });
});

afterAll(() => {
  console.warn = originalWarn;
});
// end of hack

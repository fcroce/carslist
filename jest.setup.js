global.console = {
  log: jest.fn(),

  // Keeping
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};

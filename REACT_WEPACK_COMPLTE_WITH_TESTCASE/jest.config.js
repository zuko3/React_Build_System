module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  },
  setupFiles: ["./setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "^.+\\.(css|scss)$": "identity-obj-proxy"
  }
};

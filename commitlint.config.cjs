module.exports = (async () => {
  await import("@commitlint/config-conventional");

  return {
    extends: ["@commitlint/config-conventional"],
  };
})();

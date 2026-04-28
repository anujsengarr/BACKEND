function mergeDefaults(defaults, config) {
  return { ...defaults, ...config };
}

console.log(mergeDefaults({ retries: 3 }, { timeout: 100 }));

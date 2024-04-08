let graphPromise = {};
graphPromise.promise = new Promise((resolve, reject) => {
    graphPromise.resolve = resolve;
    graphPromise.reject = reject;
});

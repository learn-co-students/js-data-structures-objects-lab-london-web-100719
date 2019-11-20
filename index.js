const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObj = { ...driver };
    newObj[key] = value;
    return newObj;
    // alternatively, the below achieves the same
    // return Object.assign({}, driver, { [key]:value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
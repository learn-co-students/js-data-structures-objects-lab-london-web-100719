// Write your solution in this file!

let driver = {
    name: 'John'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = { ...driver };
    newDriver[key] = value;
    return newDriver;
}

// updateDriverWithKeyAndValue(driver, name, 'Sam');

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    let newDriver = driver;
    return newDriver;
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = { ...driver };
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    let newDriver = driver;
    delete newDriver[key];
    return newDriver;
}
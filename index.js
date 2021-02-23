function findMatching(drivers, string) { // returns the matching list of drivers. The function should be case insensitive.
    let matches = drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
    return matches
}

function fuzzyMatch (drivers, string) { // returns all drivers whose names begin with the provided letters.
    let matches = drivers.filter(driver => {
        return driver.substring(0, string.length) === string
    })
    return matches
}

function matchName (drivers, string) { // In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
    let matches = drivers.filter(driver => {
        return driver.name === string
    })
    return matches
}
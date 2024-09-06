const { database } = require("./database.js")

//randomizes the herd drovers for each expedition.
//The number of herd drovers is based on the size of the herd given as an argument when the function is called
const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }
    return drovers
}

module.exports = { hireDrovers }
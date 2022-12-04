const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, driverName) {
    let result = drivers.filter((nameOfDriver) => nameOfDriver.toLowerCase() === driverName.toLowerCase());
    return result
}

function fuzzyMatch(drivers, driverInit) {
    let result = drivers.filter((nameOfDriver) => nameOfDriver.indexOf(driverInit) === driverInit.indexOf(driverInit));
    return result
}

function matchName(drivers, dataStructure) {
    const driversArray = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

      return driversArray.filter((list) => list.name === dataStructure)
}
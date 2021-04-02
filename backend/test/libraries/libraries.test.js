const logger = require('infra/logger')
const librariesService = require('components/libraries')

test('the function getLibraries should return a empty list, because we dont have any library', () => {
    const result = librariesService.getLibraries()
    expect(result).toEqual([])
})

const app = require("../app")

test('should equal 5 when passed 2 & 3', () => {
    expect(app.add(2, 3)).toEqual(5)
})

test('should contain avatar (the best film ever)', () => {
    expect(app.movies).toContain("avatar")
})
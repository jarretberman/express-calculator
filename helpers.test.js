const {mean, median, mode} = require("./helpers")

test("it should return a proper average, mean()", function(){

    expect(mean([1,2,3])).toEqual(2)
})

test("median() should return a proper median", function(){

    expect(median([1,2,3])).toEqual(2)
    expect(median([1,2,3,4])).toEqual(2.5)
})

test("mode() should return a proper mode", function(){

    expect(mode([1,2,2])).toEqual(2)
})
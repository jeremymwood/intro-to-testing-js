// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe(`sayHello`, function() {
    it("should return `Hello`", function() {
        expect(typeof sayHello).toBe(`function`);
    });
    it(`should return a string when called.`, function() {
        expect(typeof sayHello()).toBe(`string`);
    });
    it("should return `Hello, Jane!` when called.", function() {
        expect(sayHello(`Jane`)).toBe(`Hello, Jane!`);
    });
    it("should return `Hello, Alex!` when called.", function() {
        expect(sayHello(`Alex`)).toBe(`Hello, Alex!`);
    });
    it("should return `Hello, Pat!` when called.", function() {
        expect(sayHello(`Pat`)).toBe(`Hello, Pat!`);
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it("should  return `Hello, World!` when called", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should  return `Hello, World!` when called", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe( `isFive`, function (){
    it('should return true when called', function () {
        expect(typeof isFive).toBe(`function`)
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isFive()).toBe(`boolean`)
    });
    it('should return true when passed string `5`', function () {
        expect(isFive(`5`)).toBe(true)
    });
    it('should return true when passed number 5', function () {
        expect(isFive(5)).toBe(true)
    });
})

describe( `isEven`, function (){
    it('should return true when called', function () {
        expect(typeof isEven).toBe(`function`)
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe(`boolean`)
    });
    // it('should return true when passed string `5`', function () {
    //     expect(isFive(`5`)).toBe(true)
    // });
    it('should return true when passed number 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when passed number -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed number 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when passed string `banana`', function () {
        expect(isEven(`banana`)).toBe(false)
    });
    it('should return true when passed string `8`', function () {
        expect(isEven(`8`)).toBe(true)
    });
    it('should return true when passed number Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when called with a boolean input like isEven(true) or isEven(false)', function () {
        expect((isEven(true)) || (isEven(false))).toBe(false)
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false)
    });
})
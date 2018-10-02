describe("The question list", () => {

    beforeEach(()=> {
        console.log("Before Each");

    })

    beforeAll(()=> {
        console.log("Before All");
        
    })

    afterEach(() => {
        console.log("After Each");

    })

    afterAll(() => {
        console.log("After All");

    })

    it('should display a list of items', () => {
        expect(40 + 2).toEqual(42);
    });

    it.skip('should be a different test passing', () => {
        expect(40 + 2).toEqual(43);
    });
    
});
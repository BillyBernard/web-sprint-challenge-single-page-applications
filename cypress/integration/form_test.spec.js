describe("Forms App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    });

// Helpers
    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]');
    const pepperoniInput = () => cy.get('input[name=pepperoni]');
    const bananaPeppersInput = () => cy.get('input[name=bananaPeppers]');
    const olivesInput = () => cy.get('input[name=olives]');
    const sushiInput = () => cy.get('input[name=sushi]');
    const submitBtn = () => cy.get('button[id=order-button]');


    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5); // strict equality === !===
        expect({}).not.to.equal({}); //strict equality === !===
        expect({}).to.eql({}); // not strict == !==
    });

    it('can type into inputs', () => {
        nameInput().type('Billy');
    });

    it('can select multiple toppings', () => {
        pepperoniInput().click();
        pepperoniInput().should('have.checked', 'true')
        bananaPeppersInput().click();
        bananaPeppersInput().should('have.checked', 'true')
        olivesInput().click();
        olivesInput().should('have.checked', 'true')
        sushiInput().click();
        sushiInput().should('have.checked', 'true')
    });

    it('user can submit the form', () => {
        nameInput().type('Billy');
        sizeInput().select('large');
        submitBtn().click();
    })   
});
describe('Authentication', () => {
    it('must create and confirm a new account', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid=signup]').click();
        cy.get('[data-testid=email-input]').type('fakeEmail@gmail.com');
        cy.get('[data-testid=password-input]').type('Crowdsec2021!');
        cy.get('[data-testid=terms-of-use-checkbox]').click();
        cy.get('[data-testid=privacy-policy-checkbox]').click();
        cy.intercept('https://cognito-idp.eu-west-1.amazonaws.com/', {
            userSub: 'matt@gmail.com',
        });
        cy.get('[data-testid=submit-button]').click();
        cy.intercept('https://cognito-idp.eu-west-1.amazonaws.com/', 'SUCCESS');
        cy.get('[data-testid=code-input]').type('1234');
        cy.get('[data-testid=confirm-account]').click();
        cy.get('[data-testid=email-input]').type('fakeEmail@gmail.com');
        cy.get('[data-testid=password-input]').type('Crowdsec2021!');
        cy.intercept('https://cognito-idp.eu-west-1.amazonaws.com/', {
            jwt: '1234',
        });
        cy.get('[data-testid=submit-button]').click();
    });
});

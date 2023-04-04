describe('Visit CURA Healthcare Service to schedule an appointment', () => { 
    
    it(' Make an appointment', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#menu-toggle > .fa').click();
        cy.get('.sidebar-nav > :nth-child(4) > a').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('.col-sm-4 > :nth-child(2)').click();
        cy.get('#txt_visit_date').click();
        cy.get('tbody > :nth-child(3) > :nth-child(6)').click();
        cy.get('#txt_comment').type('Emergency');
        cy.get('#btn-book-appointment').click();
        cy.contains('Appointment Confirmation').should('be.visible');
        })   
})
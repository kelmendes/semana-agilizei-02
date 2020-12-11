///  <reference  types="cypress" />


context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        // visitar url http://automationpractice.com/index.php
        // usando '/' pq o endereço já foi adicionado como base no cypress.json
        cy.visit('/');

        // variavel nome produto 
        let nomeProduto = 'Faded Short Sleeve T-shirts';
        
        // econtrar elemento pelo oq ele contem && e disparar um ação no elemento usando o trigger 
        cy.contains(nomeProduto).trigger('mouseover');

        cy.contains(nomeProduto)
            .parent() // h5
            .siblings('div.button-container') 
            .children('a')
            .first() // add to cart
            .click() // interagir com elemento

        cy.get(".button-container a[href$='controller=order']").click();
        cy.get(".cart_navigation a[href$='controller=order&step=1']").click();

        cy.get('#email').type('oqueen@gmail.com');
        cy.get('#passwd').type('oqueen');

        cy.get('button#SubmitLogin').click();

        // [type=checkbox]#addressesAreEquals

        cy.get('button[name=processAddress]').click();

        cy.get('[type=checkbox]#cgv').check();

        cy.get('button[name=processCarrier]').click();

        cy.get('.bankwire').click();

        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click()

        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.')
        // expect
        // should 
        



        
    });
});
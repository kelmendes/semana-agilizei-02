///  <reference  types="cypress" />

context('TC100_Compra', () => {
    it('TC100_Compra: Efetuar uma compra de produto', () => {
        
        cy.backgroundLogin();

        // visitar url http://automationpractice.com/index.php
        // usando '/' pq o endereço já foi adicionado como base no cypress.json
        cy.visit('/');
        cy.pause();

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

        // validar se produto foi adicionado com sucesso
        cy.get('.icon-ok')
            .parent()//h2
            .should('contain.text','Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

        cy.get(".button-container a[href$='controller=order']").click();
        cy.get(".cart_navigation a[href$='controller=order&step=1']").click();

        //cy.get('#email').type('oqueen@gmail.com');
        //cy.get('#passwd').type('oqueen');

        //cy.get('button#SubmitLogin').click();

        // validar se o endereço de cobrança é igual ao de entrega 
        // [type=checkbox]#addressesAreEquals
        // assersão | atributi | valor
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked')
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same')

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
        
        // Ivocando texto dentro de um elemento 
        cy.get('div.box').invoke('text').then((text) => {
            // exibindo texto dentro do console 
            console.log(text)
            // filtrar texto usando expressões regulares 
            // retorna um array com o match 
            console.log(text.match(/[A-Z][A-Z]+/g)[1])
            // 0 -> RTP
            // 1 -> ID do Pedido 

            // escrita de arquivo json com o numero do pedido 
            // caminho do arquivo | conteúdo do arquivo 
            cy.writeFile('cypress/fixtures/pedido.json', {id: `${text.match(/[A-Z][A-Z]+/g)[1]}`})

        })

        // volta para pagina de pedidos 
        cy.get('.cart_navigation a[href$=history]').click();


        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
            cy.get('tr.first_item td.history_link a').should('contain.text', pedido.id)
        })

    });
});
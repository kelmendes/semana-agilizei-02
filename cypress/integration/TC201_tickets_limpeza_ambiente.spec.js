///  <reference  types="cypress" />

context('TC201_Ticket_Limpeza', () => {
    it('TC201_Ticket_Limpeza: Limpeza de dados cadastrados', () => {

        // acessando página 
        cy.visit('https://chamados-sandes.websiteseguro.com/v2');

        // logando no sistema 
        cy.get(".form-group [name=nome-input]").type('reginaldo.ayalos');
        cy.get(".form-group [name=senha-input]").type('1234');
        cy.get("#loginForm button[type=submit]").click();
        // validando se acessou o sistema 
        cy.get('.jumbotron h1')
            .should('contain.text', 'Suporte')
        cy.get('.jumbotron span')
            .should('contain.text', '- Sandes Informática ')

        // acessando navnar DropDown  de Tickets 
        cy.get('a#dropdown01.nav-link.dropdown-toggle')
            .contains('Tickets')
            .click()
        // acessando opção de pesquisar 
        cy.get('a.dropdown-item')
            .contains('Todos')
            .click()

        // Analisando retorno 
        cy.contains('AUTOMAÇÃO').parent('tr').within(() => {
            cy.get('td').eq(0).invoke('text').then((text) => {
                console.log(text.match(/[0-9]+/g))
                cy.writeFile('cypress/fixtures/ticket_limpeza.json', {id: `${text.match(/[0-9]+/g)}`})
            })           
        })

        // acessar navbar DorpDown de Tickets 
        cy.get('a#dropdown01.nav-link.dropdown-toggle')
            .contains('Operações')
            .click();
        // acessando opção de excluir ticket 
        cy.get('a.dropdown-item')
            .contains('Deletar Ticket')
            .click()

        // validar se estar na tela de deletar ticket 
        cy.get('.card-header h2')
            .should('contain.text', 'Deletar Ticket')

        // mapeando id de deletar ticket 
        // pegando valor com arquivo json criando anteriomente         
        cy.readFile('cypress/fixtures/ticket_limpeza.json').then((ticket_limpeza) => {
            cy.get('.form-inline input[name=id]').type(ticket_limpeza.id)
        })

        // botão para executar operação 
        cy.get('.form-inline input[type=submit]').click();
         

    });
});
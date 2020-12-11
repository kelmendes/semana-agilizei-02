///  <reference  types="cypress" />

context('TC200_Login', () => {
    it('TC200_Login: Logar no Tickets', () => {
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

        // acessando navnar DropDown  de clientes 
        cy.get('a#dropdown01.nav-link.dropdown-toggle')
            .contains('Clientes')
            .click()
        // acessando opção de pesquisar 
        cy.get('a.dropdown-item')
            .contains('Pesquisar')
            .click()
        // validando se acessou a pagina de pesquisa no menu de clientes 
        cy.get('.card-header h2')
            .should('contain.text','Pesquisar Cliente')

        // selecionar campo de pesquisa 
        cy.get('.form-inline select[name=IdPesquisa]')
            .select('CNPJ')

        // passando valor da pesquisa 
        cy.get('.form-inline input[name=palavra]').type('00100203000124');
        cy.get('.form-inline input[type=submit]').click();

        // Analisando retorno 
        cy.contains('1').parent('tr').within(() => {
            cy.get('td').eq(1).contains('Teste Empresa - CASO NÃO TENHA')
            cy.get('td').eq(2).contains('Fantasia TESTE')
            cy.get('td').eq(3).contains('00.100.203/0001-24')
            cy.get('td').eq(4).contains('TESTE Cidade')
            cy.get('td').eq(5).contains('a', 'Criar Ticket').click()
        })

        // validar se acessou a tela de cadastro de ticket 
        cy.get('.card-header h2')
            .should('contain.text', 'New Ticket')

        // preenchendo formulário 
        cy.get('select#SelectCliente')
            .select('Teste Empresa - CASO NÃO TENHA CADASTRO USAR ESSE - 00.100.203/0001-24')

        // confirmando poup-up
        cy.get('select#SelectAssunto')
            .select('AUTOMAÇÃO')

        // descrição com data atual 
        let descricao = "[TESTE AUTOMATIZADO] - " + Date();
        cy.get('.form-group textarea[name=descricao]').type(descricao);
        
        // Selecioando meio de atendimento 
        cy.get('.form-group select[name=meio-atendimento]')
            .select('Outro')

        // enviar para criar ticket 
        cy.get('.modal-footer input[type=submit]').click();
        
    });
});
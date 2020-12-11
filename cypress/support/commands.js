// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0hTL3YqaQZi5nq%2B2pza%2Bo4%2FQb97aWO0YsbW%2B1Svi9qUjJ1UjU%2FbAZgBeEPSig3BV7%2F1jzGJ60tTCyFL9NvrTbAlDZX7BNckByZJCmsNh316%2BU7zMY318BAqGImlRzrub82eOS8w6nEpTSHJwX4dPG%2FD4oLaQ%2FYo8RdnyXcaxLZNW7ntq%2FTo3OYNYt26xmWct1YcpI6cmzIhbVq%2BGBVvnw%2BN6TiB5JY%2Fe7MTPm5yO3Pl8bZJM0WYyed%2BQ8WQdxKv6Gaug%2FFtV5f02CejeTfvgOSHhSUHuqDGnFS8tQ5qCzFOMt521wy39gllC4u8osu3y%2FpB8ZNQ8CexOrUCHvfatxVi5OfUAD%2FmU%2F%2FmnxUO1Sv2Nz%2FfJiJymHVNjVUXTLUXDmU3yOCovaI%2Bzyi3dPDF6xdGX3nBWWFmgb9I1Ww6BKwAgcMV0L2KkgRWiWC4ATauhLg%3D%3D000340'
    )
})
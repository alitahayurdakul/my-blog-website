Cypress.Commands.add("Login", () => {
    const userName = "*******"
    const password = "*******"
    cy.request({
        method: "POST",
        url: "https://my-blog-website2.herokuapp.com/authentication/sign-in",
        body: {
            userName,
            password
        }
    })
})

Cypress.Commands.add('getLoggedIn',()=>{
    cy.intercept("GET","https://my-blog-website2.herokuapp.com/authentication/loggedIn", {
        statusCode:200,
        body:[
            {
                isLogin:true
            }
        ]
    }).as("loggedIn")
});

Cypress.Commands.add("getById", (Id) => {
    cy.get(`[data-cy = ${Id}]`)
});

Cypress.Commands.add("getLastAdded", () => {
    cy.intercept("GET","https://my-blog-website2.herokuapp.com/notes/list", {
        statusCode:200,
        fixture: "LastAdded.json"
    }).as("getLastAdded")
});

Cypress.Commands.add("getReactNotes", () => {
    cy.intercept("GET","https://my-blog-website2.herokuapp.com/notes/group-notes/react", {
        statusCode:200,
        fixture: "reactNotes.json"
    }).as("getReactNotes")
});

Cypress.Commands.add("getEnglishWords", () => {
    cy.intercept("GET","https://my-blog-website2.herokuapp.com/english-test/list", {
        statusCode:200,
        fixture: "englishWord.json"
    }).as("getEnglishWords")
});
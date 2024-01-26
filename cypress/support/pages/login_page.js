/// <reference types="cypress" />

//ELEMENTOS
const elements = {
    buttons: {
        login: '#btnLogin',
        checkbox: '.form-check-input'
    },

    fields: {
        user: '#user',
        password: '#password'
    },

    messages: {
        error: '.invalid_input',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container'
    }


}


//ACOES/METODOS
export default {

    login_click (){
        cy.get(elements.buttons.login).click()

    },

        error(message){
        cy.get(elements.messages.error)
        .should('be.visible')
        .should('have.text', message)
    
    },

    fillEmail(user){
        cy.get(elements.fields.user).type(user)


    },

    fillPassword(password){
        cy.get(elements.fields.password).type(password)

    },

    login_message(email){

        cy.get(elements.messages.successTitle)
        .should('be.visible')
        .should('have.text', 'Login realizado')

        cy.get(elements.messages.successSubtitle)
        .should('be.visible')
        .should('have.text', `Olá, ${email}`)

    },


    checkbox(){
        cy.get(elements.buttons.checkbox).check()
    }



}






// //ACOES/METODOS
// export default {

//     login_click (){
//         cy.get('#btnLogin').click()

//     },

//         error(message){
//         cy.get('.invalid_input')
//         .should('be.visible')
//         .should('have.text', message)
    
//     },

//     fillEmail(user){
//         cy.get('#user').type(user)


//     },

//     fillPassword(password){
//         cy.get('#password').type(password)

//     },

//     login_message(email){

//         cy.get('#swal2-title')
//         .should('be.visible')
//         .should('have.text', 'Login realizado')

//         cy.get('#swal2-html-container')
//         .should('be.visible')
//         .should('have.text', `Olá, ${email}`)

//     },


//     checkbox(){
//         cy.get('.form-check-input').check()
//     }



// }
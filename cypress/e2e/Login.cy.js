/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

import login_page from '../support/pages/login_page'
import home_page from '../support/pages/home_page'
const valid_data = require('../fixtures/valid_data.json')
const invalid_data = require('../fixtures/invalid_data.json')


describe('Login', () => {

    beforeEach('Acessar login de usuario', () => {
        home_page.acessarLoginUsuario()

    })

    it('Campo email vazio', () => {
        login_page.login_click()
        login_page.error('E-mail inválido.')

    })


    it('email invalido', () => {
        login_page.fillEmail(invalid_data.email)
        login_page.login_click(), {timeout: 3000}
        login_page.error('E-mail inválido.')

    })

    it('Campo senha vazio', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.login_click()
        login_page.error('Senha inválida.')

    })

    it('Campo senha invalido', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.fillPassword(invalid_data.password)
        login_page.login_click()
        login_page.error('Senha inválida.')

    })

    it('Login com sucesso', () => {
        const email = faker.internet.email()

        login_page.fillEmail(email)
        login_page.fillPassword(valid_data.password)
        login_page.login_click()
        login_page.login_message(email)

    })

    it('Login com sucesso + checkbox', () => {
        const email = faker.internet.email()

        login_page.fillEmail(email)
        login_page.fillPassword(valid_data.password)
        login_page.checkbox()
        login_page.login_click()
        login_page.login_message(email)


    })



})
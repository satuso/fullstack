describe('Bloglist app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Aku Ankka',
      username: 'aku2',
      password: 'password'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('Login')
    cy.contains('Login to application')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('aku2')
      cy.get('#password').type('password')
      cy.get('#login-button').click()
      cy.contains('Aku Ankka is logged in')
    })
    it('fails with wrong credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('user2')
      cy.get('#password').type('password')
      cy.get('#login-button').click()
      cy.contains('wrong username or password')
    })
  })
  describe('When logged in', function() {
    beforeEach(function() {
      cy.contains('login').click()
      cy.get('#username').type('aku2')
      cy.get('#password').type('password')
      cy.get('#login-button').click()
    })

    it('A blog can be created', function() {
      cy.contains('create').click()
      cy.get('#title').type('new blog title')
      cy.get('#author').type('author')
      cy.get('#url').type('blog.com')
      cy.contains('save').click()
      cy.contains('new blog title')
    })
  })
})
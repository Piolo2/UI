// Cypress test for the Simple Login page

describe('Login Page', () => {

  // Before each test, open the login page
  beforeEach(() => {
    cy.visit('./index.html');
  });

  // Test 1: Check that the page loads correctly
  it('should display the login form', () => {
    cy.get('h2').should('contain', 'Welcome Back');
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('.submit-btn').should('contain', 'Log In');
  });

  // Test 2: Show error message with wrong credentials
  it('should show error message for invalid credentials', () => {
    cy.get('#username').type('wronguser');
    cy.get('#password').type('wrongpass');
    cy.get('.submit-btn').click();

    // Check that the error message appears
    cy.get('#message')
      .should('be.visible')
      .and('have.class', 'error')
      .and('contain', 'Invalid username or password');
  });

  // Test 3: Show success message with correct credentials
  it('should show success message for valid credentials', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('password123');
    cy.get('.submit-btn').click();

    // Check that the success message appears
    cy.get('#message')
      .should('be.visible')
      .and('have.class', 'success')
      .and('contain', 'Login successful');
  });

  // Test 4: Require fields before submitting
  it('should not submit with empty fields', () => {
    cy.get('.submit-btn').click();

    // The message box should stay hidden because the browser blocks submit
    cy.get('#message').should('not.be.visible');
  });

});

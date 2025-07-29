describe("OrangeHRM Login Feature", () => {
  const baseUrl = "https://opensource-demo.orangehrmlive.com/";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Login with valid credentials", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("Login with invalid password", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("wrongpassword");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("Login with empty username", () => {
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Required").should("be.visible");
  });

  it("Login with empty password", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('button[type="submit"]').click();
    cy.contains("Required").should("be.visible");
  });

  it("Login with both empty fields", () => {
    cy.get('button[type="submit"]').click();
    cy.get("span").contains("Required").should("exist");
    cy.get('span:contains("Required")').should("have.length", 2);
  });

  it('Login with whitespace only in username and password', () => {
    cy.get('input[name="username"]').type('   ');
    cy.get('input[name="password"]').type('   ');
    cy.get('button[type="submit"]').click();
    cy.contains('Required').should('exist'); // or 'Invalid credentials'
  });

  it("Login with SQL injection string", () => {
    cy.get('input[name="username"]').type(`' OR 1=1 --`);
    cy.get('input[name="password"]').type("anything");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("Login with XSS payload in username", () => {
    cy.get('input[name="username"]').type("<script>alert(1)</script>");
    cy.get('input[name="password"]').type("anything");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("Login with uppercase username", () => {
    cy.get('input[name="username"]').type("ADMIN");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("Login with very long input (100+ chars)", () => {
    const longText = "a".repeat(120);
    cy.get('input[name="username"]').type(longText);
    cy.get('input[name="password"]').type(longText);
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it('Login using only Enter key', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123{enter}');
    cy.url().should('include', '/dashboard');
  });
});

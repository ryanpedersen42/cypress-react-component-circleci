# Cypress Component Tests on CircleCI

This project runs integration and component tests in CircleCI.

* Component test plug-in lives in `cypress/plugins/index.js`
* Configuration lives in `cypress.json`
* Integration tests live in `cypress/integration/*`
* Component tests are `App.spec.js` and `components/Button.spec.js`

Commands
```
# Run locally
npx cypress open-ct

# Running component tests in CI
npx cypress run-ct 
```

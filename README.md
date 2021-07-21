# VolvoAutomationPoc

## Features

- Simple setup, Dockerized with Selenium Grid and browser drivers
- Test with *Chrome* and *Firefox* with zero configuration
- Integrated with [WebdriverIO](https://webdriver.io/)
- BDD tests with [Cucumber](https://cucumber.io/docs/cucumber/) and over 150 predefined steps
- Support for debugging tests
- Possibility to visually see the execution in browser with *VNC*
- Detailed Allure-report generation

## Requirements

- To run *Firefox* and *Chrome* browsers with docker selenium you need:
    - 'Make sure Docker software is up and Running'
    - 'docker-compose up'

- Tests are executed with Node.js, requires:
    - `Node.js` version 14.17.3
    - `npm` version 7.20.0 

## Quick start

1. Install dependencies required to run the tests:

```sh
npm install
```

2. Start docker selenium containers with `docker-compose up`:


3. Run the tests and view the report:

```sh
# run tests and open the report
npm run test
```

To stop all the docker containers from step 2:

```sh
docker-compose down
```

Note that selenium containers can be started once and then used across multiple sessions of running and debugging tests.

## Allure Report 

Report will be generated under the Allur-report folder after the test scripts execution

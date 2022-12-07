#### Project Description.

This is a demo of the project based on Cypress. The project contains UI tests for Search functionality for https://www.imdb.com/.

#### 1.Preparing a Development environment. 

Before running tests, you should:
- install NodeJS
- install Git
- install any IDE (for example Visual Studio Code).

#### 2. Running autotests locally.

In order to run testing scripts at your own machine perform the following instructions: 
 -  Open your IDE. 
 -  Load the project from GitHub. 
Project URL: https://github.com/Hanna-Antsipina/cypress_imdb_search  
 -  Install components. 
As soon as project is loaded, go to the root and perform command: npm install .
It will install all components based on the package.json file. 
 -  As soon as components are loaded you may run testing scripts. Run all test:
 
npx cypress open => select “E2E testing” => choose a browser => tap on “Start E2E testing” button => select iMDBTests.js
 
#### 3. What did I choose to test and why?

First of all, we need to test positive scenarios, scenarios that users will use most often (direct requirements from the specification) and effectiveness of the buttons used:
 - checking the relevance of the search by the entered correct movie name
 - checking the relevance of the search by the entered TV show name with typo (we check both: correct search in the TV show category and ability to search correctly with typos) 
 - checking the relevance of the search by the Celebrity name with extra symbols (we check both: correct search in the Celebrity category and ability to search correctly with extra symbols)
 - checking the start of the search by pressing the Enter button on the keyboard and pressing the magnifying glass icon (I combined these checks with the checks above to reduce the number of tests performed)
 - checking that placeholder is correct (this check is contained in the ‘before’ section)
 - checking the pop-up appearance with a relevant result after entering a value in the text field
 - сhecking that the entered data is correctly deleted by pressing Esc and Backspace buttons
 - checking that the title ‘Search “...” ’ contains the value entered by the user for the search
 - checking that search is available on every page, not just on the home page (in my tests, after the search results are issued, the user remains on the screen with the issued data, so each time we check the search from a new screen)

Next, i decided to test that the search will correctly handle (because these scenarios are also typical of user behavior, and we need to be sure that the behavior of the system is correct):
 - the name without space
 - the entered number
 - the entered letter
 - case - insensitive
 - the entered space only
 - the value that does not exist on the site (i use JsScript) 
 
#### 4. How are my files structured, and why?

According to the theory of the framework organization, there should be several layers in the structure and each layer is responsible for certain actions. That is, my files structure is dictated by the requirements of the Cypress:
 - UI_Tests folder - a layer with tests
 - support folder - a layer for working with pages (with which work is carried out in tests), a description of methods for interacting with elements and finding them inside these pages
 - plugins folder - a layer for plugins that are needed are added to the index file
 - command.js - a layer with commands
 - package.json/cypress.config.js - a  layer with configurations
 
#### 5. How else might I have done things?

- I could write a script on package.json that will define a particular browser in which the test will take place instead of selecting a browser in Cypress before running tests 
- I could use the BDD approach. The advantage of BDD is that any member of the team can connect to the tests at any stage: an analyst, a business user, a developer and a tester, since the tests are understandable to all participants in the process. For business, the project becomes more transparent, thanks to natural language constructs that are understandable to anyone who is far from programming. But it is time-consuming and requires effective cooperation and communication.
 
#### 6. How might I expand on these tests in future?

For sure we need to expand on these tests, because the coverage is not comprehensive. We definitely need to add:
 - check more results issued by the search (in my tests, I checked the relevance of the search for the first result issued, I believe that it is necessary to expand the number of results being checked)
 - check the relevance of results output in all categories shown: titles and people
 - check the correctness of using the search in different languages: when there are different languages in the settings and also when the user enters a query in a language different from what is specified in the settings (my tests are written for the english site version). Also we need to check translations. 
 - check that the search results are correctly sorted: from the newer ones by release date to the older ones, that the results most suitable for the search query are given first, and only then others (how the search should be sorted is described in the specification and we need to choose the checks accordingly)
 - check that the search works fine from the clipboard
 - check the limits for entering text into the search bar (limits should be described in the specification and we need to choose the checks accordingly)
 - check the ‘Exact matches’: efficiency and relevance of the results output
 - check the ‘More popular matches’: efficiency and relevance of the results output
 
#### 7. How did I overcome any technical challenges I encountered?

I bought and completed the “Cypress: Web automation testing from Zero to Hero”  course on Udemy. It was very useful for me, cos I didn't have any knowledge about Cypress and JS, and this course has excellent guidance. Also google helped me a lot and https://docs.cypress.io/ site. 
Feature: login test scenarios

  Scenario Outline: As a user, I can log into app with valid email and password
    Given I am on the welcome screen
    When user enters the '<email>' and '<password>'
    And click on sign in button
    Then user should be logged in and on user profile page is shown

        Examples:
      | email               | password   |
      | qacosm024@gmail.com | Monika@123 |

  Scenario Outline: Sign in button is disabled with invalid email
    Given I am on the welcome screen
    When user enters the '<email>' and '<password>'
    Then sign in should be disabled

        Examples:
      | email       | password | 
      | qacosm02    | monik    | 


  Scenario Outline: Error message should be shown with invalid email and password
    Given I am on the welcome screen
    When user enters the '<email>' and '<password>'
    And click on sign in button
    Then a login page email error message '<loginErrorMsg>' should be shown

        Examples:
      | email               | password  | loginErrorMsg |
      | qacosm024@gmail.com | Mon@123   |You have entered wrong email Id or password, please try again|



  #   # When I login with <username> and <password>
  #   # Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |

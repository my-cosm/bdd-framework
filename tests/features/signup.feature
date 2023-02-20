Feature: Sign up scenarios

  # Scenario Outline: Error message should be shown for existing email
  #   Given signup - I am on the welcome screen
  #   When signup - user clicks on sign up button
  #   And signup - user enters the '<firstname>' , '<lastname>', '<email>' and '<password>'
  #   And signup - click on sign in button
  #   And signup - validate the error message '<errmsg>'

  #   Examples:
  #     |firstname| lastname  | email               | password   | errmsg |
  #     |Monika   | Yadav     | qacosm024@gmail.com | Monika@123 | Account already exists |

  

  Scenario Outline: Error message should be shown for invalid password
    Given signup - I am on the welcome screen
    When signup - user clicks on sign up button
    And signup - user enters the '<firstname>' , '<lastname>', '<email>' and '<password>'
    And signup - click on sign in button
    And signup - validate the password validation message conatainer is present

    Examples:
      |firstname| lastname  | email               | password| 
      |Monika   | Yadav     | qacosm024@gmail.com | hhhhw   | 

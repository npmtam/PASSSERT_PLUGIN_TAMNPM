@PasssertDisplay
Feature: Check the protected area popup display after inject the shortcode
  As a user
  I want to inject the passster shortcode to set the password protected area

  Scenario: 01 - Check the password protected area popup display
    Given I open the wordpress website
    And I log in to the website
      | Username  | Password |
      | tamnguyen | Abcd1234 |
    When I create a new post
    And write the content
      | Title                     | Content                                                                    |
      | Password protected plugin | The smart way to create password-protected areas in WordPress. See pricing |
    And insert the shortcode to hide text
      | Password | Hidden text |
      | abc123   | Single: $39 |
    And publish post
    And press the View post button
    Then I verify the protected area popup is displayed
    And the popup header is "PROTECTED AREA"
    And the popup display with text "This content is password-protected. Please verify with a password to unlock the content."
    And the placeholder is "Enter your password.."
    And the submit button displayed

  Scenario: 02 - Input incorrect password
    Given I open the wordpress website
    And I log in to the website
      | Username  | Password |
      | tamnguyen | Abcd1234 |
    When I create a new post
    And write the content
      | Title                   | Content                                                                    |
      | Incorrect password case | The smart way to create password-protected areas in WordPress. See pricing |
    And insert the shortcode to hide text
      | Password | Hidden text |
      | abc123   | Single: $39 |
    And publish post
    And press the View post button
    And I input the password "abc"
    And I click Submit button
    Then the error message should appears




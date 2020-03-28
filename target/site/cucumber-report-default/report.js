$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC01_ProtectedAreaDisplay.feature");
formatter.feature({
  "line": 2,
  "name": "Check the protected area popup display after inject the shortcode",
  "description": "As a user\r\nI want to inject the passster shortcode to set the password protected area",
  "id": "check-the-protected-area-popup-display-after-inject-the-shortcode",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PasssertDisplay"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#  Scenario: 01 - Check the password protected area popup display"
    },
    {
      "line": 7,
      "value": "#    Given I open the wordpress website"
    },
    {
      "line": 8,
      "value": "#    And I log in to the website"
    },
    {
      "line": 9,
      "value": "#      | Username  | Password |"
    },
    {
      "line": 10,
      "value": "#      | tamnguyen | Abcd1234 |"
    },
    {
      "line": 11,
      "value": "#    When I create a new post"
    },
    {
      "line": 12,
      "value": "#    And write the content"
    },
    {
      "line": 13,
      "value": "#      | Title                     | Content                                                                    |"
    },
    {
      "line": 14,
      "value": "#      | Password protected plugin | The smart way to create password-protected areas in WordPress. See pricing |"
    },
    {
      "line": 15,
      "value": "#    And insert the shortcode to hide text"
    },
    {
      "line": 16,
      "value": "#      | Password | Hidden text |"
    },
    {
      "line": 17,
      "value": "#      | abc123   | Single: $39 |"
    },
    {
      "line": 18,
      "value": "#    And publish post"
    },
    {
      "line": 19,
      "value": "#    And press the View post button"
    },
    {
      "line": 20,
      "value": "#    Then I verify the protected area popup is displayed"
    },
    {
      "line": 21,
      "value": "#    And the popup header is \"PROTECTED AREA\""
    },
    {
      "line": 22,
      "value": "#    And the popup display with text \"This content is password-protected. Please verify with a password to unlock the content.\""
    },
    {
      "line": 23,
      "value": "#    And the placeholder is \"Enter your password..\""
    },
    {
      "line": 24,
      "value": "#    And the submit button displayed"
    }
  ],
  "line": 26,
  "name": "02 - Input incorrect password",
  "description": "",
  "id": "check-the-protected-area-popup-display-after-inject-the-shortcode;02---input-incorrect-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I open the wordpress website",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I log in to the website",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 29
    },
    {
      "cells": [
        "tamnguyen",
        "Abcd1234"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I create a new post",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "write the content",
  "rows": [
    {
      "cells": [
        "Title",
        "Content"
      ],
      "line": 33
    },
    {
      "cells": [
        "Incorrect password case",
        "The smart way to create password-protected areas in WordPress. See pricing"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "insert the shortcode to hide text",
  "rows": [
    {
      "cells": [
        "Password",
        "Hidden text"
      ],
      "line": 36
    },
    {
      "cells": [
        "abc123",
        "Single: $39"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "publish post",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "press the View post button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input the password \"abc\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the error message should appears",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckDisplaySteps.i_open_the_wordpress_website()"
});
formatter.result({
  "duration": 9430304056,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.i_log_in_to_the_website(DataTable)"
});
formatter.result({
  "duration": 3372788844,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.i_create_a_new_post()"
});
formatter.result({
  "duration": 2450439758,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.write_the_content(DataTable)"
});
formatter.result({
  "duration": 2733021509,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.insert_the_shortcode_to_hide_text_something(DataTable)"
});
formatter.result({
  "duration": 1064348771,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.publish_post()"
});
formatter.result({
  "duration": 370881441,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.press_the_view_post_button()"
});
formatter.result({
  "duration": 3370263567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 22
    }
  ],
  "location": "CheckDisplaySteps.i_input_the_password_something(String)"
});
formatter.result({
  "duration": 134573295,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.i_click_submit_button()"
});
formatter.result({
  "duration": 1446021038,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.the_error_message_should_appears()"
});
formatter.result({
  "duration": 104887442,
  "status": "passed"
});
});
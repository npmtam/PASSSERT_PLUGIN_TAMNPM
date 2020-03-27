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
  "line": 6,
  "name": "01 - Check the password protected area popup display",
  "description": "",
  "id": "check-the-protected-area-popup-display-after-inject-the-shortcode;01---check-the-password-protected-area-popup-display",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open the wordpress website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I log in to the website",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 9
    },
    {
      "cells": [
        "tamnguyen",
        "Abcd1234"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I create a new post",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "write the content",
  "rows": [
    {
      "cells": [
        "Title",
        "Content"
      ],
      "line": 13
    },
    {
      "cells": [
        "Password protected plugin",
        "The smart way to create password-protected areas in WordPress. See pricing"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "insert the shortcode to hide text",
  "rows": [
    {
      "cells": [
        "Password",
        "Hidden text"
      ],
      "line": 16
    },
    {
      "cells": [
        "abc123",
        "Single: $39"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "publish post",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "press the View post button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify the protected area popup is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the popup header is \"PROTECTED AREA\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the popup display with text \"This content is password-protected. Please verify with a password to unlock the content.\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the placeholder is \"Enter your password..\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the submit button displayed",
  "keyword": "And "
});
formatter.match({
  "location": "CheckDisplaySteps.i_open_the_wordpress_website()"
});
formatter.result({
  "duration": 6879015820,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.i_log_in_to_the_website(DataTable)"
});
formatter.result({
  "duration": 3199889316,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.i_create_a_new_post()"
});
formatter.result({
  "duration": 2977824699,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.write_the_content(DataTable)"
});
formatter.result({
  "duration": 3434007603,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.insert_the_shortcode_to_hide_text_something(DataTable)"
});
formatter.result({
  "duration": 1027415937,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.publish_post()"
});
formatter.result({
  "duration": 324425141,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.press_the_view_post_button()"
});
formatter.result({
  "duration": 2721097573,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.i_verify_the_protected_area_popup_is_displayed()"
});
formatter.result({
  "duration": 91878020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PROTECTED AREA",
      "offset": 21
    }
  ],
  "location": "CheckDisplaySteps.the_popup_header_is_something(String)"
});
formatter.result({
  "duration": 32828593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This content is password-protected. Please verify with a password to unlock the content.",
      "offset": 29
    }
  ],
  "location": "CheckDisplaySteps.the_popup_display_with_text_something(String)"
});
formatter.result({
  "duration": 32876627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter your password..",
      "offset": 20
    }
  ],
  "location": "CheckDisplaySteps.the_placeholder_is_something(String)"
});
formatter.result({
  "duration": 23380257,
  "status": "passed"
});
formatter.match({
  "location": "CheckDisplaySteps.the_submit_button_displayed()"
});
formatter.result({
  "duration": 1088518100,
  "status": "passed"
});
});
Feature: Signup Feature

    Scenario Outline: Signup with valid credentials
        When User navigates to the baseurl
        And Click on Create an Account link
        Then Verify "/customer/account/create/" customer create account page
        When User enters the Personal Details fields:
        Then Verify "Thank you for registering with Main Website Store." message is displayed
        And User navigates to "/customer/account/" page
        Examples:
            | FirstName | LastName | Email | Password | ConfirmPassword |
            | faker     | faker    | faker | faker    | faker           |
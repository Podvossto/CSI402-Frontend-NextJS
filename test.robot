*** Settings ***
Documentation     Test CSI403 LAP
Library           SeleniumLibrary
Library           Screenshot

*** Test Cases ***
TC-S0101 Test Login SCMS For Personal Info
    Open Browser    http://localhost:3000/    Chrome
    Sleep    3s   
    [Teardown]    Close Browser
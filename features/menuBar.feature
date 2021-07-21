Feature: Campaign page menu bar and menu items items

    Scenario: Validate Navigation Side bar show hide

        Given I am on campaign page
        Then I see side navigation bar is "not displayed"
        When I click hamburger icon in top nav bar
        Then I see side navigation bar is "displayed"
        When I click side menu bar close icon
        Then I see side navigation bar is "not displayed"


    Scenario Outline: Validate Navigation Side bar menu item "<MainMenuItem>"
        Given I am on campaign page
        Then I see side navigation bar is "not displayed"
        When I click hamburger icon in top nav bar
        Then I see side navigation bar is "displayed"
        Then I validate main menu item "<MainMenuItem>" in side nav bar
        When I click main menu item "<MainMenuItem>" in side nav bar
        Then I see sub menu drawer with title "<Title>" is displayed in side nav bar
        Then I validate sub menu items "<SubMenuItems>" in side nav

        Examples:
            | MainMenuItem | SubMenuItems                                         | Title     |
            | Buy          | Fleet sales, Used cars,Diplomatic sales, Child seats | Buy       |
            | Own          | Support, Service & Repair, Accessories, Volvo Recall | Own       |
            | Why Volvo    | Our Story, Our Heritage                              | Why Volvo |
            | Explore      | Recharge, Concepts                                   | Explore   |
            | More         | Company, Contact Us                                  | More      |

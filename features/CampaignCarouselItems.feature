Feature: Campaign carousel items

    Scenario Outline: Validate carousel items displayed model name "<modelName>" and recharge type "<rechargeType>"
        Given I am on campaign page
        Then I see carousel item displayed with model name "<modelName>" and recharge type "<rechargeType>"

        Examples:
            | modelName     | rechargeType   |
            | XC90 Recharge | plug-in hybrid |
            | XC60 Recharge | plug-in hybrid |
            | XC40 Recharge | plug-in hybrid |
            | XC40 Recharge | pure electric  |

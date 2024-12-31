// ==UserScript==
// @name         Duolingo Pro (Extension)
// @namespace    http://tampermonkey.net/
// @version      2024-04-09
// @description  Fix the Listening only mode from the original extension.
// @author       Zensud
// @match        https://www.duolingo.com/*
// @icon         https://imgs.search.brave.com/V03bRmemSGDlrBy5Iq1IdnhmfODnqNAC0L6F7si5F6w/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvY2NjMzk1YmM5/Y2ZhZTFkYTg3ZTlm/NjNhZjZiYjY3M2Yy/NTZmMmUyNDQwYzkx/MTY2MjJjMWRmYWRi/Mjc4NzQxMy93d3cu/ZHVvbGluZ28uY29t/Lw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const autobutton = "/html/body/div[5]/div[1]/div[2]/div[3]/div/label";
    const listeningPage = "https://www.duolingo.com/practice-hub/listening-practice"; //Listening url
    const practiceHub = "https://www.duolingo.com/practice-hub"; // Practice hub URL
    const buttonXPath = "/html/body/div[1]/div[1]/div/div/div[2]/div/div/div/button[1]";
    let buttonClicked = false;

    //timer function
    function clickButton() {
        const button = document.evaluate(buttonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (button) {
            button.click();
            console.log("Button clicked!");
        } else {
            console.log("Button not found!");
        }
    }

    function navigateTolisteningPage() {
        window.location.href = listeningPage;
    }

    function clickButtonOnce() {
        if (!buttonClicked) {
            const button = document.getElementById("solveAllButton");
            if (button) {
                button.click();
                buttonClicked = true;
            }
        }
    }

    if (window.location.href === practiceHub) {
        navigateTolisteningPage();
    } else if (window.location.href === listeningPage) {
        clickButtonOnce();
    }

    setInterval(function() {
        if (window.location.href === practiceHub) {
            navigateTolisteningPage();
        } else if (window.location.href === listeningPage) {
            clickButtonOnce();
        }
    }, 5000);
})();





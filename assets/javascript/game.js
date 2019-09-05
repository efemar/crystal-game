
$(document).ready(function () {


    var wins = 0;
    var lose = 0;
    var compRandom = "";
    var amethystCounter = 0
    var bloodstoneCounter = 0
    var sapphireCounter = 0
    var garnetCounter = 0
    var garnetNum = 0;
    var bloodstoneNum = 0;
    var amethystNum = 0;
    var sapphireNum = 0;
    var totalScore = 0;
    var amethystTotal = 0;
    var garnetTotal = 0;
    var bloodstoneTotal = 0;
    var sapphireTotal = 0;
    var targetScore = 0;


    //Define a function to get random numbers 
    function getCompNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //This function clears the scoreboard
    function newRound() {

        reset();
        
        targetScore = getCompNum(19, 121);
        totalScore = amethystTotal + sapphireTotal + garnetTotal + bloodstoneTotal;
        //console.log(targetScore);

        if (compRandom === "") {
            $("#comp-number").text(targetScore);


            garnetNum = getCompNum(1, 13);
            $("#garnet").attr("value", garnetNum);
            //$("#userNumber").text(garnetNum);

            bloodstoneNum = getCompNum(1, 13);
            $("#bloodstone").attr("value", bloodstoneNum);

            amethystNum = getCompNum(1, 13);
            $("#amethyst").attr("value", amethystNum);
            //$("#userNumber").text(garnetNum);

            sapphireNum = getCompNum(1, 13);
            $("#sapphire").attr("value", sapphireNum);

        }
    }


    // This function checks the status of the events (win/loss)
    function checkStatus() {

        if (totalScore < targetScore) {
            $("#message").text("Keep going! Choose Wisely");
        }

        if (totalScore === targetScore) {
            wins++;
            $("#message").text("You have choosen wisely!!");
            $("#wins").text(wins);
            newRound(); //calls the newRound function after each win
        }

        else if (totalScore > targetScore) {
            lose++;
            $("#message").text("You lost!!");
            $("#losses").text(lose);
            newRound(); //calls the newRound function after each loss
        }
    }


    //This generates a random number for the computer between 19 and 120 upon click to the play button
    $("#play-button").on("click", function () {

        resetWL();

        targetScore = getCompNum(19, 121);
        totalScore = amethystTotal + sapphireTotal + garnetTotal + bloodstoneTotal;
        console.log(targetScore);

        if (compRandom === "") {
            $("#comp-number").text(targetScore);


            garnetNum = getCompNum(1, 13);
            $("#garnet").attr("value", garnetNum);
            //$("#userNumber").text(garnetNum);

            bloodstoneNum = getCompNum(1, 13);
            $("#bloodstone").attr("value", bloodstoneNum);

            amethystNum = getCompNum(1, 13);
            $("#amethyst").attr("value", amethystNum);
            //$("#userNumber").text(garnetNum);

            sapphireNum = getCompNum(1, 13);
            $("#sapphire").attr("value", sapphireNum);

        }
    })



    //Create a function that counts the number of times the crystal buttons are clicked
    $("#garnet").on("click", function () {

        garnetCounter++;
        console.log(totalScore);

        garnetTotal = garnetNum * garnetCounter;

        totalScore = amethystTotal + sapphireTotal + garnetTotal + bloodstoneTotal;
        console.log("This is garnet total inside" + totalScore, garnetTotal);

        $("#userNumber").text(garnetTotal + sapphireTotal + bloodstoneTotal + amethystTotal);

        checkStatus();
    })


    $("#sapphire").on("click", function () {

        sapphireCounter++;

        sapphireTotal = sapphireNum * sapphireCounter;

        totalScore = amethystTotal + sapphireTotal + garnetTotal + bloodstoneTotal;
        console.log("This is saph total" + sapphireTotal);

        $("#userNumber").text(garnetTotal + sapphireTotal + bloodstoneTotal + amethystTotal);

        checkStatus();
    })



    $("#bloodstone").on("click", function () {

        bloodstoneCounter++;

        bloodstoneTotal = bloodstoneNum * bloodstoneCounter;

        totalScore = amethystTotal + sapphireTotal + garnetTotal + bloodstoneTotal;
        console.log("This is blood total" + bloodstoneTotal);

        $("#userNumber").text(garnetTotal + sapphireTotal + bloodstoneTotal + amethystTotal)

        checkStatus();

    })

    $("#amethyst").on("click", function () {

        amethystCounter++;

        amethystTotal = amethystNum * amethystCounter;

        totalScore = amethystTotal + sapphireTotal + garnetTotal + bloodstoneTotal;
        console.log("This is amethyst total" + amethystTotal);

        $("#userNumber").text(garnetTotal + sapphireTotal + bloodstoneTotal + amethystTotal)

        checkStatus();

    })


    //Reset the crystal values w/o reseting the Win/Loss score

    function reset() {

        compRandom = "";
        amethystCounter = 0
        bloodstoneCounter = 0
        sapphireCounter = 0
        garnetCounter = 0
        garnetNum = 0;
        bloodstoneNum = 0;
        amethystNum = 0;
        sapphireNum = 0;
        totalScore = 0;
        amethystTotal = 0;
        garnetTotal = 0;
        bloodstoneTotal = 0;
        sapphireTotal = 0;
        targetScore = 0;
        $("#userNumber").text("");
        $("#comp-number").text("");
    }

    ////Reset the Win/Loss score
    function resetWL() {
        wins = 0;
        lose = 0;
        compRandom = "";
        amethystCounter = 0
        bloodstoneCounter = 0
        sapphireCounter = 0
        garnetCounter = 0
        garnetNum = 0;
        bloodstoneNum = 0;
        amethystNum = 0;
        sapphireNum = 0;
        totalScore = 0;
        amethystTotal = 0;
        garnetTotal = 0;
        bloodstoneTotal = 0;
        sapphireTotal = 0;
        targetScore = 0;
        $("#userNumber").text("");
        $("#comp-number").text("");
    }



}
)



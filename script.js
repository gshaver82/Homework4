//if tally = -1 that means the quiz hasnt started
//this will allow highscores to be seen
//if tally has a value not -1 then the quiz is in progress
//and program will not allow you to back out to high scores
var tally = -1;
var highScoreTally = 0;
var quizIndex = 0;
var temp;
var clickedans;
var mainhtml = $("main").html();
var highscores = $(".highscores").html();
var questionBlock = $("#questionBlock").html();

quiz = [
    question1 = {
        questionText: "what? one",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question2 = {
        questionText: "what? two",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question3 = {
        questionText: "what? 3",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question4 = {
        questionText: "what? 4",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question5 = {
        questionText: "what? 5",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question6 = {
        questionText: "what? 6",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question7 = {
        questionText: "what? 7",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question8 = {
        questionText: "what? 8",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question9 = {
        questionText: "what? 9",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
    question10 = {
        questionText: "what? 10",
        qAns: ["this", "orthis", "orthis2", "orthis3"],
        correctans: 1,
    },
]
$(document).ready(function () {
    mainhtml = $("main").html();
    highscores = $(".highscores").html();
    $(".highscores").empty();
    questionBlock = $("#questionBlock").html();
    $("#questionBlock").empty();

    $('body').on("click", "#start", function () {
        $("main").empty();
        $("main").html(questionBlock);
        quizFunction();
    })
    $('body').on("click", "#highscores", function () {
        if (tally == -1) {
            $("main").html(highscores);
        }

    })

    $('body').on("click", "#restart", function () {
        $("main").empty();
        $("main").html(mainhtml);
    })
});


function quizFunction() {
    //this var will store the correct answers the player has gotten
    tally = 0;
    quizIndex = 0;
    $("#question").text(quiz[quizIndex].questionText);
    //this is a for loop that  displays each of the 4 possible answers
    $("ul li").text(function (index) {
        return "Answer " + (index + 1) + ": " + quiz[quizIndex].qAns[index];
    });
    //display block above is now complete
    temp = quiz[quizIndex].correctans;
    quizIndex = 1;
    $('body').on("click", ".ans", function () {
        clickedans = $(this).attr("value");
        if (clickedans == temp) {
            $("#grade").text("Correct!");
            console.log("Correct!");
            console.log(quizIndex);
            tally++;
        } else {
            $("#grade").text("Wrong!");
            console.log("Wrong!");
        }

        if (quizIndex == quiz.length) {
            console.log(quizIndex);
            highScoreTally = tally;
            tally = -1;
            quizIndex = 0;
            $("main").empty();
            $("main").html(highscores);
            return;
        } else {
            //this populates the question
            setTimeout(function () {
                $("#question").text(quiz[quizIndex].questionText);
                $("#grade").text("");
                //this is a for loop that  displays each of the 4 possible answers
                $("ul li").text(function (index) {
                    return "Answer " + (index + 1) + ": " + quiz[quizIndex].qAns[index];
                });
                quizIndex++;
            }, 1000);
        }
        
    })
};
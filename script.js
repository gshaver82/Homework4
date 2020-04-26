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
    var mainhtml = $("main").html();
    var highscores = $(".highscores").html();
    $(".highscores").empty();
    var questionBlock = $("#questionBlock").html();
    $("#questionBlock").empty();

    $('body').on("click", "#start", function () {
        $("main").empty();
        $("main").html(questionBlock);
        quizFunction();
    })
    $('body').on("click", "#highscores", function () {
        $("main").html(highscores);
    })

    $('body').on("click", "#restart", function () {
        $("main").empty();
        $("main").html(mainhtml);
    })
});


function quizFunction() {
    //this var will store the correct answers the player has gotten
    var tally = 0;

    //this for loop runs through each of the questions in the quiz array
    for (var i = 0; i < quiz.length; i++) {

        //the console log shows that this is working
        //cant yet figure out the timer that is going to work
        //with scope. i put timer on, quiz[i] is undefined. 

        $("#question").text(quiz[i].questionText);
        //this is a for loop that  displays each of the 4 possible answers
        $("ul li").text(function (index) {
            return "Answer " + (index + 1) + ": " + quiz[i].qAns[index];
        });
        //display block above is now complete
        var temp = quiz[i].correctans;
        $('body').on("click", ".ans", function () {
            var clickedans = $(this).attr("value");
            if(clickedans == temp){
                $("#grade").text("Correct!");
                console.log("Correct!");
                tally ++;
            }else{
                $("#grade").text("Wrong!");
                console.log("Wrong!");
            }
        })
        

    }


};
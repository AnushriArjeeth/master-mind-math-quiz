function send()
{
    No1 = document.getElementById("No1").value;
    No2 = document.getElementById("No2").value;
    actual_answer = parseInt(No1) * parseInt(No2);

    question = "<h4>" + No1 + "X" + No2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>"

div = question + input_box + check_button ;

document.getElementById("output").innerHTML=div;

document.getElementById("No1").value="";
document.getElementById("No2").value="";

}

question_turn = "player1";
answer_turn = "player2";



function check()
{
    get_answer = document.getElementById("input_check_box").value;

if(get_answer==actual_answer)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }

        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }

    else
    {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
    }

    if(answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

    }

    else
    {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;

    }
     
    document.getElementById("output").innerHTML="";
    
}
function total (){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("urd").value);
    var sub4 = parseInt(document.getElementById("eco").value);
    var sub5 = parseInt(document.getElementById("acc").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("please enter mark in the range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "English marks : "+sub2+ " <br> Mathematics marks : "+sub3+
         " <br> Computer marks :"+sub4+" <br> Economics marks :"+sub5+ " <br> Accounting marks" +sub1+"<br>       <br> Total marks"+total;   
         
    }
}
function Average(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("urd").value);
    var sub4 = parseInt(document.getElementById("eco").value);
    var sub5 = parseInt(document.getElementById("acc").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("please enter mark in the range of 100");
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var Ave = total/5;
        document.getElementById("ave").innerHTML = "your average marks is :"+Ave;
    }

}


function Grade(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("urd").value);
    var sub4 = parseInt(document.getElementById("eco").value);
    var sub5 = parseInt(document.getElementById("acc").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("please enter mark in the range of 100");
    }

    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5
        var Ave = total/5

        if(Ave>=80 && Ave<=100){
            document.getElementById('grade').innerHTML = 'Your grade is A';
        }
        else if(Ave>=75 && Ave<=80){
            document.getElementById('grade').innerHTML = 'Your grade is B+';
        }

        else if(Ave>=70 && Ave<=75){
            document.getElementById('grade').innerHTML = 'Your grade is B';
        }

        else if(Ave>=65 && Ave<=70){
            document.getElementById('grade').innerHTML = 'Your grade is C+';
        }

        else if(Ave>=60 && Ave<=65){
            document.getElementById('grade').innerHTML = 'Your grade is D+';
        }

        else if(Ave>=55 && Ave<=60){
            document.getElementById('grade').innerHTML = 'Your grade is D';
        }

        else{
            document.getElementById('grade').innerHTML = 'Your grade is F'
        }


    }

}
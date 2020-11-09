
var temp;

function IN790(){
    console.log("IN790 loading...");
    var IN790string = "IN790";
    readData(IN790string);
}
function IN700(){
    console.log("IN700 loading...");
    var IN700string = "IN790";
    readData(IN700string);
}
function IN750(){
    console.log("IN750 loading...");
    var IN750string = "IN790";
    readData(IN750string);
}
function IN760(){
    console.log("IN760 loading...");
    var IN760string = "IN790";
    readData(IN760string);
}
// function readData(val) {

$.ajax({
    // url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/7965e1ce6ae46e53fe3030cf96562df58d11b5fb/attendance.json',
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/a8175e0b5c915d9e2d857a2f114704094ade22b9/attendance.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        var dataArray = data;
        var count = 0;
        
        $.each(data, function(count) {
            
            if (data[count].class == "IN790"){
                $('#markRollTable tr:last').after('<tr><td id="name'+count+'" val="'+count+'" onClick="showSmallInfo(this)"></td><td id="studID'+count+'"></td><td class="Class" id="Class'+count+'">1</td><td class="Stream" id="Stream'+count+'">A</td><td id ="yesterday'+count+'" class="yesterday" val=""></td></td><td id ="today"><select class="indvidMark" id="mark'+count+'" class="attendance"><option value = "Present">Present (P)</option><option value = "Absent">Absent (A)</option><option value = "Late">Late (L)</option><option value = "Explained">Explained (E)</option><option value = "Sick">Sick (S)</option></select></td></tr>');
                $("#name"+count).text((data[count].name.first) +(" ")+ (data[count].name.last) );
                $("#studID"+count).text(data[count].id );
                // console.log(count);
                for(var x = 0; x < data[count].attendance.length ; x++){
                    
                    $("#yesterday"+count).text(data[count].attendance[3] );
                    if(data[count].attendance[3] == "l"){
                        $(".yesterday:contains('l')").addClass('late ');
                    } else if(data[count].attendance[3] == "p"){
                        $(".yesterday:contains('p')").addClass('present ');
                    } else if(data[count].attendance[3] == "e"){
                        $(".yesterday:contains('e')").addClass('explained ');
                    }else if(data[count].attendance[3] == "s"){
                        $(".yesterday:contains('s')").addClass('sick ');
                    }else if(data[count].attendance[3] == "a"){
                        $(".yesterday:contains('a')").addClass('absent ');
                    }

                }
            }
            count++; 
            //console.log(count);
            // $("").click(function(e) {  
            //     alert(1);
            // });
            
        });
    }

});
//}


// $(function() {
//     // $('#today').change(function() {
//     //     localStorage.setItem('Attedance', this.value);
//     // });
//     // if(localStorage.getItem('Attedance')){
//     //     $('#today').val(localStorage.getItem('Attedance'));
//     // }
//     console.log(localStroage.getItem('Attedance'));
// });

function save(elem){
    var id = $(elem).attr("id");
    console.log(id);
    var count = 0;
    console.log("In save method");
    $("tr").each(function(count) {
        var mark;
        mark = $("select.indvidMark").val();
        // var mark = document.getElementsByClassName("attendance").value;
        console.log(mark);
        console.log(count);
        localStorage.setItem("Student" + " " + count, mark);
        count++; 
    });
    alert("Todays marks have been saved.");
    
}

function autoFill(){
    // var autoFill = document.getElementsByClassName("auto").value;
    var autoFill;
    autoFill = $("select.auto").val();
    console.log(autoFill);
    $("tr").each(function(count) {
        $("select.indvidMark").val(autoFill);
    });
}

function update(){
    var stream;
    var classOfTheWeek;
    stream = $("select.stream").val();
    classOfTheWeek = $("select.class").val();
    
    $("tr").each(function() {
        $(".Stream").text(stream);
        $(".Class").text(classOfTheWeek);
    });
}

function submit(){
    alert("Todays marks have been submitted, Thank You.");
}

function showSmallInfo(elem, dataArray){
    var id = $(elem).attr("id");
    var value = $(elem).attr("val");
    
    $("#first").empty();
    $("#last").empty();
    $("#ethnicity").empty();
    $("#age").empty();
    $("#address").empty();
    $("#email").empty();
    $("#sID").empty();
    $("#ph").empty();
    $("#enrolment").empty();
    $("#since").empty();

    $("#first").append(" " + id);
    $("#last").append(" " + id);
    $("#ethnicity").append(" " + id);
    $("#age").append(" " + id);
    $("#address").append(" " + id);
    $("#email").append(" " + id);
    $("#sID").append(" " + id);
    $("#ph").append(" " + id);
    $("#enrolment").append(" " + id);
    $("#since").append(" " + id);
    

}
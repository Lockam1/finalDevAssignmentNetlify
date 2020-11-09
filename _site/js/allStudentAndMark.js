$.ajax({
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/7965e1ce6ae46e53fe3030cf96562df58d11b5fb/attendance.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        var count = 0;
        
        $.each(data, function(count) {
            
            $('#markRollTable tr:last').after('<tr><td id="name'+count+'" val=""></td><td id="studID'+count+'"></td><td id="cl1'+count+'" class="cl1"></td><td id ="cl2'+count+'" class="cl1"></td><td id ="cl3'+count+'" class="cl1"></td><td id ="cl4'+count+'"class="cl1"></td><td id ="cl5'+count+'" class="cl1"></td><td id =""></td><td id =""></td><td id =""></td><td id =""></td><td id =""></td><td id =""></td><td id =""></td></tr>');
            $("#name"+count).text((data[count].name.first) +(" ")+ (data[count].name.last) );
            $("#studID"+count).text(data[count].id );
            for(var x = 0; x < data[count].attendance.length ; x++){
                    
                $("#cl1"+count).text(data[count].attendance[0] );
                $("#cl2"+count).text(data[count].attendance[1] );
                $("#cl3"+count).text(data[count].attendance[2] );
                $("#cl4"+count).text(data[count].attendance[3] );
                
                if(data[count].attendance[0] == "l"){
                    $(".cl1:contains('l')").addClass('late ');
                } else if(data[count].attendance[0] == "p"){
                    $(".cl1:contains('p')").addClass('present ');
                } else if(data[count].attendance[0] == "e"){
                    $(".cl1:contains('e')").addClass('explained ');
                }else if(data[count].attendance[0] == "s"){
                    $(".cl1:contains('s')").addClass('sick ');
                }else if(data[count].attendance[0] == "a"){
                    $(".cl1:contains('a')").addClass('absent ');
                }
                
            }
            
            
            
            count++;
            console.log(count);
        });
        

    }
});

//Working code for being able to edit the previous attendace, but this code the color coding isnt working out.

// $.each(data, function(count) {
            
//     $('#markRollTable tr:last').after('<tr><td id="name'+count+'" val=""></td><td id="studID'+count+'"></td><td ><select id="cl1'+count+'" class="cl1"></select></td><td><select id="cl2'+count+'" class="cl1"></select></td><td><select id="cl3'+count+'" class="cl1"></select></td><td><select id="cl4'+count+'" class="cl1"></select></td><td></td><td id =""></td><td id =""></td><td id =""></td><td id =""></td><td id =""></td><td id =""></td><td id =""></td></tr>');
//     $("#name"+count).text((data[count].name.first) +(" ")+ (data[count].name.last) );
//     $("#studID"+count).text(data[count].id );
//     $("#cl1"+count).append('<option val="a">a</option><option val="p">p</option><option val="e">e</option><option val="l">l</option><option val="s">s</option>'); 
//     $("#cl2"+count).append('<option val="a">a</option><option val="p">p</option><option val="e">e</option><option val="l">l</option><option val="s">s</option>'); 
//     $("#cl3"+count).append('<option val="a">a</option><option val="p">p</option><option val="e">e</option><option val="l">l</option><option val="s">s</option>'); 
//     $("#cl4"+count).append('<option val="a">a</option><option val="p">p</option><option val="e">e</option><option val="l">l</option><option val="s">s</option>'); 
//     var markClass1 = $("#cl1 option:selected").html();
//     console.log(markClass1 + "hello");
    
//     for(var x = 0; x < data[count].attendance.length ; x++){
        
//         $("#cl1"+count).val(data[count].attendance[0] );
//         $("#cl2"+count).val(data[count].attendance[1] );
//         $("#cl3"+count).val(data[count].attendance[2] );
//         $("#cl4"+count).val(data[count].attendance[3] );
         
//         if(markClass1 == "l"){
//             $(".cl1").addClass('late ');
//         } else if(markClass1 == "p"){
//             $(".cl1").addClass('present ');
//         } else if(markClass1 == "e"){
//             $(".cl1").addClass('explained ');
//         }else if(markClass1 == "s"){
//             $(".cl1").addClass('sick ');
//         }else if(markClass1 == "a"){
//             $(".cl1").addClass('absent ');
//         }
        
//     }
    
//     count++;
//     console.log(count);
// });
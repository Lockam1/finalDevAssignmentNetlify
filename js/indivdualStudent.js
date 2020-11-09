$.ajax({
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/7965e1ce6ae46e53fe3030cf96562df58d11b5fb/attendance.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        var count = 0;
       
        // var students = temp.options[temp.selectedIndex].text;
        console.log(student);
        $.each(data, function(count) {
            $('#student').append($('<option></option>').val(count).html(data[count].name.first +" "+ data[count].name.last));


            
            count++;
            
            console.log(count);
        });
       
        
        //$("#nameHere").text(data[].attendance[0] );
        
    

    }
});
function change(){
    var selected = document.getElementById("#student").value;
    
    console.log(selected);
    $("#Name").text(selected );
}
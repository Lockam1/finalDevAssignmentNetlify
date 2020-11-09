$.ajax({
    url: 'https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/7965e1ce6ae46e53fe3030cf96562df58d11b5fb/attendance.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        var count = 0;
        
        $.each(data, function(count) {
        
            
            
            
            count++;
            
            
            console.log(count);
        });
        
    

    }
});
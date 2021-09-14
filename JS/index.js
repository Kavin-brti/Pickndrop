$("#form-from").on("submit", function (e) {
    e.preventDefault();
    var btn = document.getElementById("from-btn");
    btn.innerHTML = 'Submitted';
    btn.className='form-submitted-from';
    console.log('Ajax');
    var dataString = $(this).serialize();
    console.log(dataString);
    $.ajax({
      type: "POST",
      url: "http://localhost:5500/from",
      data: dataString,
      success: function () {
        // Display message back to the user here
      }
    });
 
    
});

//to

$("#to-form").on("submit", function (e) {
    e.preventDefault();
    var btn = document.getElementById("to-btn");
    btn.innerHTML = 'Submitted';
    btn.className='form-submitted-to';
    console.log('Ajax');
    var dataString = $(this).serialize();
    console.log(dataString);
    $.ajax({
      type: "POST",
      url: "http://localhost:5500/to",
      data: dataString,
      success: function () {
        // Display message back to the user here
      }
    });
 
    
});
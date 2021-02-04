$(document).ready(function(){
  $("form#stress-test-survey").submit(function(event){
    event.preventDefault();
    $("#negative-response").show();
  });
});
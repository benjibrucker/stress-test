$(document).ready(function(){
  $("form#stress-test-survey").submit(function(event){
    event.preventDefault();
    
    var arrayNCheckBoxes= [];
    $("input:checkbox[name=negative]:checked").each(function(){
      const negativeCheckBoxes = $(this).val();
      $("#response1").append(negativeCheckBoxes + "<br>");
      $("#response2").append(negativeCheckBoxes + "<br>");
      $("#response3").append(negativeCheckBoxes + "<br>");
      arrayNCheckBoxes.push(negativeCheckBoxes);
      arrayNCheckBoxesL = arrayNCheckBoxes.length;
      if (arrayNCheckBoxesL <= 2) {
        $("#response1").show();
      } else if (arrayNCheckboxesL === 3) {
        $("#response2").show();
      } else { 
        (arrayNCheckBoxesL > 3); 
        $("#response3").show();
      }
    });
    
  });
});

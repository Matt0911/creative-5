$(document).ready(function(){
  var ids = [
    'bountiful',
    'brighamCity',
    'draper',
    'jordanRiver',
    'logan',
    'manti',
    'monticello',
    'mountTimpanogos',
    'ogden',
    'oquirrhMountain',
    'payson',
    'provoCityCenter',
    'provo',
    'stGeorge',
    'saltLake',
    'vernal'
  ]

  $("#save").click(function(){
      var myobj = {Name:$("#name").val(),Temples:{}};
      for (var i = 0, len = ids.length; i < len; i++) {
        myobj.Temples[ids[i]] = $('#'+ids[i]).prop('checked');
      }
      console.log(myobj);
      jobj = JSON.stringify(myobj);
      // $("#json").text(jobj);

      var url = "comment";
      // $.ajax({
      //   url:url,
      //   type: "POST",
      //   data: jobj,
      //   contentType: "application/json; charset=utf-8",
      //   success: function(data,textStatus) {
      //       $("#done").html(textStatus);
      //   }
      // });
  });

  $("#load").click(function() {
    $.getJSON('temples', function(data) {
      console.log(data);
      for (temple in data.Temples) {
        console.log(temple.Name + ': ' + temple.Visited);
      }
    })
  });

});

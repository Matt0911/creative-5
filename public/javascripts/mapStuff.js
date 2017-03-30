function checkSelected() {
  var ids = [
    'bountiful',
    'brigham-city',
    'draper',
    'jordan-river',
    'logan',
    'manti',
    'monticello',
    'mount-timpanogos',
    'ogden',
    'oquirrh-mountain',
    'payson',
    'provo-city-center',
    'provo',
    'st-george',
    'salt-lake',
    'vernal'
  ]
  for (var i = 0, len = ids.length; i < len; i++) {
    if ($('#'+ids[i]).prop('checked')) {
      $('#'+ids[i]+'-map').show()
    } else {
      $('#'+ids[i]+'-map').hide()
    }
  }
}

$(document).ready(function() {
  checkSelected()
  $('input').click(checkSelected)
})

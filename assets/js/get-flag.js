    
// flag search

function formatoSelect(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><img class="flag flag-' + state.element.value.toLowerCase() + '"/>' + state.text + '</span>'
    );
    return $state;
  };

  var data = [{
    id: 'ar',
    text: 'Argentina',
  }, {
    id: 'pe',
    text: 'Peru',
  }, {
    id: 'mx',
    text: 'Mexico',
  }, {
    id: 'sv',
    text: 'El Salvador',
  }, {
    id: 'cl',
    text: 'Chile',
  }, {
    id: 'uy',
    text: 'Uruguay',
  }, {
    id: 'py',
    text: 'Paraguay',
  }, {
    id: 'pa',
    text: 'Panamá',
  }, {
    id: 've',
    text: 'Venezuela',
  }, {
    id: 'es',
    text: 'España',
  }, {
    id: 'ni',
    text: 'Nicaragua',
  }, {
    id: 'cr',
    text: 'Costa Rica',
  }, {
    id: 'bo',
    text: 'Bolivia',
  }, {
    id: 'pr',
    text: 'Puerto Rico',
  }, {
    id: 'us',
    text: 'Estados Unidos',
  }, {
    id: 'hn',
    text: 'Honduras',
  }, {
    id: 'ec',
    text: 'Ecuador',
  }, {
    id: 'br',
    text: 'Brasil',
  }, {
    id: 'do',
    text: 'R. Dominicana',
  }, {
    id: 'gt',
    text: 'Guatemala',
  }, {
    id: 'co',
    text: 'Colombia',
  }];

  $('#paises').select2({
    templateResult: formatoSelect,
    templateSelection: formatoSelect,
    data: data,
    minimumResultsForSearch: -1,
  });
  // buscar si esta definido el pais.
  function arrayObjectIndexOf(myArray, searchTerm, property) {
    for (var i = 0, len = myArray.length; i < len; i++) {
      if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
  }

//   jQuery.getJSON('http://ipinfo.io', function(n) {
//     //console.log(n)
//     //alert(arrayObjectIndexOf(data, "co", "id"));
//     var ct = arrayObjectIndexOf(data, n.country.toLowerCase(), "id");
//     if (ct !== -1) {
//       $('#paises').val(n.country.toLowerCase());
//       $('#paises').trigger('change');
//       $('.telefono').text(data[ct].phone);
//     } else {
//       $('#paises').val('us');
//       $('#paises').trigger('change');
//       $('.telefono').text('(888) 886 9881');
//     }

//   });

//   $('#paises').on('select2:select', function(evt) {
//     //console.log(evt);
//     //  alert();
//     if (arrayObjectIndexOf(data, $('#paises').val(), "id") !== -1) {
//       var ct = arrayObjectIndexOf(data, $('#paises').val(), "id");
//       //alert(data[ct].phone);
//       $('.telefono').text(data[ct].phone);
//     }

//   });
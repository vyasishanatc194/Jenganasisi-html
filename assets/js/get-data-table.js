 $('#example').DataTable(
        {
        "paging":   true,
        "ordering": true,
        "info":     false,
        "bLengthChange": false,
        "searching": false,      
        "columnDefs": [
      { "width": "5%", "targets": 0 },
      { "width": "20%", "targets": 1 },
      { "width": "30%", "targets": 2 },
      { "width": "15%", "targets": 3 },
      { "width": "10%", "targets": 4 },
      { "width": "10%", "targets": 5 },
      { "width": "10%", "targets": 6 },
      { className: "first-col", "targets": [ 0 ] },
      { className: "second-col", "targets": [ 1 ] },
      {
      "targets": 5,
      "orderable": false
      } 
      ]
       });

       $('#example2').DataTable(
        {
        "paging":   true,
        "ordering": true,
        "info":     false,
        "bLengthChange": false,
        "searching": false,      
        "columnDefs": [
      { "width": "5%", "targets": 0 },
      { "width": "20%", "targets": 1 },
      { "width": "30%", "targets": 2 },
      { "width": "15%", "targets": 3 },
      { "width": "10%", "targets": 4 },
      { "width": "10%", "targets": 5 },
      { "width": "10%", "targets": 6 },
      { className: "first-col", "targets": [ 0 ] },
      { className: "second-col", "targets": [ 1 ] },
      {
      "targets": 5,
      "orderable": false
      } 
      ]
       });


       $('#example3').DataTable(
        {
        "paging":   false,
        "ordering": true,
        "info":     false,
        "bLengthChange": false,
        "searching": false,      
        "columnDefs": [
      { "width": "5%", "targets": 0 },
      { "width": "20%", "targets": 1 },
      { "width": "30%", "targets": 2 },
      { "width": "15%", "targets": 3 },
      { "width": "10%", "targets": 4 },
      { "width": "10%", "targets": 5 },
      { "width": "10%", "targets": 6 },
      { className: "first-col", "targets": [ 0 ] },
      { className: "second-col", "targets": [ 1 ] },
      {
      "targets": 5,
      "orderable": false
      } 
      ]
       });



// reseller table

       $('#product-table').DataTable(
        {
        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });


       $('#product-table-used').DataTable(
        {
        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });


       $('#product-bidder').DataTable(
        {
        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });


       $('#service-track').DataTable(
        {

        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "bAutoWidth": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });

       
       $('#all-appointmebt').DataTable(
        {

        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "bAutoWidth": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });


       $('#payment-status').DataTable(
        {

        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "bAutoWidth": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });


       $('#seller-management').DataTable(
        {

        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "bAutoWidth": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });


       $('#user-management').DataTable(
        {

        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "bAutoWidth": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });


       
       $('#plan-management').DataTable(
        {

        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "bAutoWidth": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });

       $('#seller-product').DataTable(
        {

        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "bAutoWidth": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });

       $('#seller-service').DataTable(
        {

        "bPaginate": false,
        "ordering": true,
        "info": false,
        "bFilter": false,
        "bLengthChange": false,
        "bAutoWidth": false,
        "searching": false, 
        "columnDefs": [
          { className: "first-col", "targets": [ 0 ] },
          { className: "second-col", "targets": [ 1 ] },
        ]
       });


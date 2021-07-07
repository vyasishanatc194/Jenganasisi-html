$("#example").DataTable({
  paging: true,
  ordering: true,
  info: false,
  bLengthChange: false,
  searching: false,
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "20%", targets: 1 },
    { width: "30%", targets: 2 },
    { width: "15%", targets: 3 },
    { width: "10%", targets: 4 },
    { width: "10%", targets: 5 },
    { width: "10%", targets: 6 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 5,
      orderable: false,
    },
  ],
});

$("#example2").DataTable({
  paging: true,
  ordering: true,
  info: false,
  bLengthChange: false,
  searching: false,
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "20%", targets: 1 },
    { width: "30%", targets: 2 },
    { width: "15%", targets: 3 },
    { width: "10%", targets: 4 },
    { width: "10%", targets: 5 },
    { width: "10%", targets: 6 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 5,
      orderable: false,
    },
  ],
});

$("#example3").DataTable({
  paging: false,
  ordering: true,
  info: false,
  bLengthChange: false,
  searching: false,
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "20%", targets: 1 },
    { width: "30%", targets: 2 },
    { width: "15%", targets: 3 },
    { width: "10%", targets: 4 },
    { width: "10%", targets: 5 },
    { width: "10%", targets: 6 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 5,
      orderable: false,
    },
  ],
});

// reseller table

$("#product-table").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#product-table-used").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#product-bidder").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#service-track").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#all-appointmebt").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#payment-status").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#seller-management").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#user-management").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#plan-management").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#seller-product").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

$("#seller-service").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
  ],
});

// Logistic - admin side

$("#logistic-management").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "20%", targets: 1 },
    { width: "22%", targets: 2 },
    { width: "15%", targets: 3 },
    { width: "13%", targets: 4 },
    { width: "10%", targets: 5 },
    { width: "15%", targets: 6 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 6,
      orderable: false,
    },
  ],
});

$("#logistic-orders-management").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "37%", targets: 1 },
    { width: "15%", targets: 2 },
    { width: "15%", targets: 3 },
    { width: "13%", targets: 4 },
    { width: "15%", targets: 5 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 5,
      orderable: false,
    },
  ],
});

$("#logistic-orders-management-table-intab").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "45%", targets: 1 },
    { width: "16%", targets: 2 },
    { width: "16%", targets: 3 },
    { width: "18%", targets: 4 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 4,
      orderable: false,
    },
  ],
});

$("#logistic-pickup-location-management-dtable").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "22%", targets: 1 },
    { width: "22%", targets: 2 },
    { width: "15%", targets: 3 },
    { width: "15%", targets: 4 },
    { width: "17%", targets: 5 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 4,
      orderable: false,
    },
  ],
});

// End of Logistic - admin side

//user module

$("#logistic-shopping-cart-dtable").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "45%", targets: 0 },
    { width: "15%", targets: 1 },
    { width: "20%", targets: 2 },
    { width: "20%", targets: 3 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 4,
      orderable: false,
    },
  ],
});

//End of user module

// reseller module

$("#product-select-shipping").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "30%", targets: 0 },
    { width: "30%", targets: 1 },
    { width: "15%", targets: 2 },
    { width: "20%", targets: 3 },
    { width: "25%", targets: 4 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 4,
      orderable: false,
    },
  ],
});

$("#pickup-store-select-dtable").DataTable({
  bPaginate: false,
  ordering: false,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "22%", targets: 0 },
    { width: "23%", targets: 1 },
    { width: "16%", targets: 2 },
    { width: "17%", targets: 3 },
    { width: "22%", targets: 4 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 4,
      orderable: false,
    },
  ],
});

// pickup store

$("#user-info-dtable").DataTable({
  bPaginate: false,
  ordering: false,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "25%", targets: 0 },
    { width: "20%", targets: 1 },
    { width: "20%", targets: 2 },
    { width: "15%", targets: 3 },
    { width: "20%", targets: 4 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 4,
      orderable: false,
    },
  ],
});

// agent module

$("#orders-management-agent-dtable").DataTable({
  bPaginate: false,
  ordering: true,
  info: false,
  bFilter: false,
  bLengthChange: false,
  bAutoWidth: false,
  searching: false,
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "37%", targets: 1 },
    { width: "15%", targets: 2 },
    { width: "15%", targets: 3 },
    { width: "13%", targets: 4 },
    { width: "15%", targets: 5 },
    { className: "first-col", targets: [0] },
    { className: "second-col", targets: [1] },
    {
      targets: 5,
      orderable: false,
    },
  ],
});
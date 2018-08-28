$(document).ready(function(){
  $('#sidebarCollapse').on('click', function(){
    $('#sidebar').toggleClass('active');
  })

  $('[data-toggle="tooltip"]').tooltip()

  $('#addNewBtn').click(function(){
    $('.enrollContainer').show();
  })

  //DataTable
  $('#example').DataTable({
    dom: 'Bfrtip',
    searching: false,
    columnDefs: [
      { "width": "15%", "targets": 3 },
      { "width": "10%", "targets": 5 }
    ]
  });
  //update
  $('.update').click(function () {
    var id = $(this).closest('tr').attr('id');
    $('#updateCollege').modal({
      show: true
    });
  });
  //delete 
  $('.delete').click(function () {
    var id = $(this).closest('tr').attr('id');
    $('#hdntr').val(id);
    $('#deleteCollege').modal({
      show: true
    });
  });
  //submit 
  $('#btnSubmit').click(function () {
    var id = $(this).closest('tr').attr('id');
    $('#hdntr').val(id);
    $('#submitCollege').modal({
      show: true
    });
  });
  $('#canceled-btn').click(function () {
    $("#" + $('#hdntr').val() + '').hide();
  });
  $('.main-content').addClass('animated zoomIn');
})
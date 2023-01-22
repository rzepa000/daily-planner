var timeDisplayEl = $('#currentDay');
var container = $('#container');



function displayTime() {
    var rightNow = moment().format(' dddd, MMMM Do ');;
    timeDisplayEl.text(rightNow);
   
  }


setInterval(displayTime, 1000);




var table = $('<table>').width('100%');
var currentHour=moment().format('HH');

for(var i=9; i<18; i++){
  
  var row = $('<tr>').addClass('row');
  table.append(row);
    if(i>12){
      var td1= $('<td>').addClass('hour').text(i-12+"PM");
    }else  if(i<=12){
      var td1= $('<td>').addClass('hour').text(i+"AM");
    }
    row.append(td1);  
    if(currentHour==i){
      var td2= $('<td>').addClass('description present').attr('id', 'td'+i);
      var input=$('<input>').attr('id', 'task'+i);
      row.append(td2);
      td2.append(input)
    }else if(currentHour>i){
      var td2= $('<td>').addClass('description past').attr('id', 'td'+i);
      var input=$('<input>').attr('id', 'task'+i);
      row.append(td2);
      td2.append(input)
      
    }else if(currentHour<i){
      var td2= $('<td>').addClass('description future').attr('id', 'td'+i);
      var input=$('<input>').attr('id', 'task'+i);
      row.append(td2);
      td2.append(input)
    }
  var td3= $('<td>').addClass('saveBtn');
  var button=$('<button>').attr('id', 'save'+i);
  var icon=$('<i>').addClass('fa-solid fa-floppy-disk');
  row.append(td3);
  td3.append(button);
  button.append(icon);
  
}
container.append(table);

function pop_up(){
  var begin_size = 0;
    var end_size = 30;
    var speed = 500;
    var speed2 = 500;

    $("#savemessage").css("opacity", begin_size).animate({"opacity" : end_size}, speed);
    setTimeout(() => {$("#savemessage").css("opacity", end_size).animate({"opacity" : begin_size}, speed2)},1000)
    
}

$('#task9').val(localStorage.getItem('set1'));
$('#task10').val(localStorage.getItem('set2'));
$('#task11').val(localStorage.getItem('set3'));
$('#task12').val(localStorage.getItem('set4'));
$('#task13').val(localStorage.getItem('set5'));
$('#task14').val(localStorage.getItem('set6'));
$('#task15').val(localStorage.getItem('set7'));
$('#task16').val(localStorage.getItem('set8'));
$('#task17').val(localStorage.getItem('set9'));
     




  $('#save9').on('click', function(){
    var inputTask = $('#task9').val()
    localStorage.setItem('set1', inputTask);
    pop_up();
  })
  $('#save10').on('click', function(){
    
    var inputTask = $('#task10').val()
    localStorage.setItem('set2', inputTask);
    pop_up()
  })
  $('#save11').on('click', function(){
    var inputTask = $('#task11').val()
    localStorage.setItem('set3', inputTask);
    pop_up()
  })
  $('#save12').on('click', function(){
    var inputTask = $('#task12').val()
    localStorage.setItem('set4', inputTask);
    pop_up()
  })
  $('#save13').on('click', function(){
    var inputTask = $('#task13').val()
    localStorage.setItem('set5', inputTask);
    pop_up()
  })
  $('#save14').on('click', function(){
    var inputTask = $('#task14').val()
    localStorage.setItem('set6', inputTask);
    pop_up()
  })
  $('#save15').on('click', function(){
    var inputTask = $('#task15').val()
    localStorage.setItem('set7', inputTask);
    pop_up()
  })
  $('#save16').on('click', function(){
    var inputTask = $('#task16').val()
    localStorage.setItem('set8', inputTask);
    pop_up()
  })
  $('#save17').on('click', function(){
    var inputTask = $('#task17').val()
    localStorage.setItem('set9', inputTask);
    pop_up()
  })
   
   


var timeDisplayEl = $('#currentDay');
var inputTask = $('#input')
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
      var td2= $('<td>').addClass('description present').append('<input>');
      row.append(td2);
    }else if(currentHour>i){
      var td2= $('<td>').addClass('description past').append('<input>');
      row.append(td2);
    }else if(currentHour<i){
      var td2= $('<td>').addClass('description future').append('<input>');
      row.append(td2);
    }
  var td3= $('<td>').addClass('saveBtn');
  var button=$('<button>');
  var icon=$('<i>').addClass('fa-solid fa-floppy-disk')
  row.append(td3);
  td3.append(button);
  button.append(icon);
  
}
container.append(table);
//console.log(currentHour)
inputTask.on('click', function(event){



  
})
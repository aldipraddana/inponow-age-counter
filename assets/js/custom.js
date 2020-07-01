function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  $('#timeNow').html(h + " Jam " + m + " Menit " + s + " Detik ");
  t = setTimeout(function() {
    startTime()
  }, 500);
}

const submit_ald = () => {
  const tanggal = $('#tanggal').val();
  const bulan = $('#bulan').val();
  const tahun = $('#tahun').val();
  console.log(tanggal, bulan, tahun);

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(tahun, bulan, tanggal);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  const secondDate = new Date(yyyy, mm, dd);
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  const newFormat_tahun = Math.floor(Number(diffDays)/365);
  const newFormat_s = Number(diffDays)%365;
  const newFormat_bulan = Math.floor(Number(newFormat_s)/30.4167)
  const newFormat_ss = Math.floor(Number(newFormat_s)%30.4167)

  startTime()
  $('#result_').html(`<div class="card shadow">
                        <div class="card-body">
                          <b style="font-weight:bold">Umurmu</b>: ${newFormat_tahun} Tahun ${newFormat_bulan} Bulan ${newFormat_ss} Hari <span id="timeNow"></span>
                        </div>
                      </div>`);



  console.log(diffDays, newFormat_tahun, newFormat_bulan, newFormat_ss);

  // console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
}

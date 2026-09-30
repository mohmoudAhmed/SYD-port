// 1) Ku dheji URL-ka Apps Script-ka ee aad heshay marka aad "Deploy" gareyso
var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz66h-qeKGG9UEmwDFCsq1BmRcEo23vNwxja160Il6f_mKSU99QsHwYnS_08gIgMwlsiw/exec';

var btn = document.getElementById('go');
btn.onclick = function () {
  var f = document.getElementById('fm'), ok = true;
  f.querySelectorAll('input[type=text],input[type=tel],input[type=email],input[type=number],textarea').forEach(function (x) { if (!x.value.trim()) ok = false; });
  ['g', 'q3', 'q4'].forEach(function (n) { if (!f.querySelector('input[name=' + n + ']:checked')) ok = false; });
  var err = document.getElementById('err');
  if (!ok) { err.textContent = 'Fadlan buuxi dhammaan goobaha loo baahan yahay (*).'; err.style.display = 'block'; return; }
  err.style.display = 'none';

  function radio(n) { var r = f.querySelector('input[name=' + n + ']:checked'); return r.parentNode.textContent.trim(); }
  var ta = f.querySelectorAll('textarea');
  var data = {
    name: n.value.trim(), phone: t.value.trim(), email: e.value.trim(), gender: radio('g'),
    age: a.value.trim(), education: s.value.trim(),
    q1: ta[0].value.trim(), q2: ta[1].value.trim(), q3: radio('q3'), q4: radio('q4'), q5: ta[2].value.trim()
  };

  btn.disabled = true; btn.textContent = 'Waa la gudbinayaa...';
  fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(data) })
    .then(function () { f.style.display = 'none'; document.getElementById('ok').style.display = 'block'; })
    .catch(function () {
      btn.disabled = false; btn.textContent = '➤ Soo Gudbi Codsiga';
      err.textContent = 'Codsiga lama gudbin. Fadlan mar kale isku day.'; err.style.display = 'block';
    });
};

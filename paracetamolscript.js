const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', () => {
  const weight = document.getElementById('weight').value;
  const measurement = document.getElementById('measurement').value;
  let dosageml;
  let dosagemg;
  switch (measurement) {
            case 'measurement1':
                dosagemg = weight * 15;
                dosageml = weight * 0.6;
              break;
            case 'measurement2':
              dosagemg = weight * 0.45359237 * 15;
              dosageml = weight * 0.45359237 * 0.6
              break;
            default:
              dosage = '';
  }

  document.getElementById('dosagemg').value = dosagemg;
  document.getElementById('dosageml').value = dosageml;
});

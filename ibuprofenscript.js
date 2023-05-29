const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', () => {
  const weight = document.getElementById('weight').value;
  const strength = document.getElementById('strength').value;
  const measurement = document.getElementById('measurement').value;
  let dosageml;
  let dosagemg;

  switch (strength) {
    case 'strength1':
        switch (measurement) {
            case 'measurement1':
                dosagemg = weight * 6;
                dosageml = weight * 0.3;
              break;
            case 'measurement2':
              dosagemg = (weight * 0.45359237) * 6;
              dosageml = (weight * 0.45359237) * 0.3
              break;
            default:
              dosage = '';
          }
      break;
    case 'strength2':
      switch (measurement) {
        case 'measurement1':
            dosagemg = weight * 6;
            dosageml = weight * 0.15;
          break;
        case 'measurement2':
          dosagemg = weight * 0.45359237 * 6;
          dosageml = weight * 0.45359237 * 0.15
          break;
        default:
          dosage = '';
      }
      break;
    default:
      dosage = '';
  }

  document.getElementById('dosagemg').value = dosagemg;
  document.getElementById('dosageml').value = dosageml;
});

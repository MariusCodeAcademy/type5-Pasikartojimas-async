// nusitaikom i el

const formEl = document.getElementById('mainForm');
const ageEl = formEl.querySelector('#age');
const nameEl = formEl.querySelector('#name');
const emailEl = formEl.querySelector('#email');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('sending form');
  const dataToSend = {
    name: nameEl.value,
    age: ageEl.value,
    email: emailEl.value,
  };
  console.log('dataToSend ===', dataToSend);
  const dataInJson = JSON.stringify(dataToSend);
  console.log('dataInJson ===', dataInJson);
  sendDataToBackend(dataToSend);
});

async function sendDataToBackend(dataToSend) {
  const resp = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  });
  const data = await resp.json();
  console.log(data);
}

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;

  analyzeAsync(name, date);
});


async function analyzeAsync(name, date) {
  calculateDestiny(name);
  calculateSoul(name);
  calculatePersonality(name);
}

async function calculateDestiny(name) {
  const destiny = new Destiny(name);
  const results = await destiny.getResults();

  const element = document.getElementById('destiny');
  element.style.visibility = 'visible';

  const number = document.getElementById('destiny-number');
  number.innerText = 'Your Destiny Number: ' + destiny.digit.simplified + ' (' + destiny.digit.string + ')';;

  const paragraphs = document.getElementById('destiny-result');
  paragraphs.innerHTML = '';
  for (let i = 0; i<results.length; i++) {
    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerText = results[i];
    paragraphs.appendChild(p);
  }

  const description = await destiny.getDescription();
  const desc = document.createElement('div');
  desc.className = 'alert alert-primary';
  desc.innerHTML = 'What is destiny? ' + description;
  paragraphs.appendChild(desc);
}

async function calculateSoul(name) {
  const soul = new Soul(name);
  const results = await soul.getResults();

  const element = document.getElementById('soul');
  element.style.visibility = 'visible';

  const number = document.getElementById('soul-number');
  number.innerText = 'Your Soul Number: ' + soul.digit.simplified + ' (' + soul.digit.string + ')';

  const paragraphs = document.getElementById('soul-result');
  paragraphs.innerHTML = '';
  for (let i = 0; i<results.length; i++) {
    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerText = results[i];
    paragraphs.appendChild(p);
  }

  const description = await soul.getDescription();
  const desc = document.createElement('div');
  desc.className = 'alert alert-primary';
  desc.innerHTML = 'What is Soul? ' + description;
  paragraphs.appendChild(desc);
}

async function calculatePersonality(name) {
  const personality = new Personality(name);
  const results = await personality.getResults();

  const element = document.getElementById('personality');
  element.style.visibility = 'visible';

  const number = document.getElementById('personality-number');
  number.innerText = 'Your Personality Number: ' + personality.digit.simplified + ' (' + personality.digit.string + ')';

  const paragraphs = document.getElementById('personality-result');
  paragraphs.innerHTML = '';
  for (let i = 0; i<results.length; i++) {
    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerText = results[i];
    paragraphs.appendChild(p);
  }

  const description = await personality.getDescription();
  const desc = document.createElement('div');
  desc.className = 'alert alert-primary';
  desc.innerHTML = 'What is Personality? ' + description;
  paragraphs.appendChild(desc);
}
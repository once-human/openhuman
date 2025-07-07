const base = window.location.pathname.split('/')[1];
const profilePath = `/${base}/openhuman/human.json`;

fetch('openhuman/human.json')
  .then(res => res.json())
  .then(profile => {
    const el = document.getElementById('profile');
    el.innerHTML = `
      <div class="mb-2"><strong>Name:</strong> ${profile.name}</div>
      <div class="mb-2"><strong>Handle:</strong> @${profile.handle}</div>
      <div class="mb-2"><strong>Title:</strong> ${profile.title}</div>
      <div class="mb-2"><strong>Tags:</strong> ${profile.tags.join(', ')}</div>
      <div class="mb-2"><strong>Now Playing:</strong> ${profile.now_playing}</div>
      <div class="mb-2"><strong>Building:</strong> ${profile.building.join(', ')}</div>
      <div class="mb-2"><strong>Open To:</strong> ${profile.open_to.join(', ')}</div>
      <div class="mb-2"><strong>Contact:</strong> Twitter: <a href='https://twitter.com/${profile.contact.twitter.replace('@','')}' target='_blank'>${profile.contact.twitter}</a>, Email: <a href='mailto:${profile.contact.email}'>${profile.contact.email}</a></div>
      <div class="mb-2"><strong>Vibe Score:</strong> ${profile.vibe_score}
    `;
  })
  .catch(() => {
    document.getElementById('profile').innerText = 'Profile not found.';
  }); 
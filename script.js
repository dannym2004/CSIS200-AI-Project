
const url = "https://api.openai.com/v1/completions";

const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('.output');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const prompt = input.value;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`
    },
    body: JSON.stringify({
      "model": "text-davinci-003",
      "prompt": prompt,
      "max_tokens": 60,
      "temperature": 1.2
    })
  });
  const data = await response.json();
  output.textContent = data.choices[0].text;
  input.value = '';
});

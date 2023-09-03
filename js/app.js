const form = document.getElementById('apiForm');

form.onsubmit = function (event) {
    event.preventDefault();

    var text = document.getElementById('inputText').value;

    fetch("/.netlify/functions/fetch-gpt-3", {
        method: 'POST',
        body: text
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('outputText').innerText =
            "Response from GPT-3: " + data.choices[0].text.trim();
    });
};

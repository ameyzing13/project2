const fetch = require("node-fetch");

exports.handler = async function(event) {
   let evtBody = event.body;
   const response = await fetch(
    "https://api.openai.com/v1/engines/davinci-codex/completions", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer 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`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           "prompt": evtBody,
           "max_tokens": 60
        })
    });

   const data = await response.json();
   return {
       statusCode: 200,
       body: JSON.stringify(data),
   };
};

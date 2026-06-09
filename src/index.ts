const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Kitty</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #ffb7c5;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: monospace;
    }
    h1 {
      font-size: 2.5rem;
      color: #c0006a;
      letter-spacing: 0.1em;
      margin-bottom: 1.5rem;
      font-family: sans-serif;
    }
    pre {
      font-size: 1.1rem;
      line-height: 1.5;
      color: #5a0030;
      background: rgba(255,255,255,0.45);
      padding: 2rem 3rem;
      border-radius: 1.5rem;
      border: 2px solid #ff85a1;
      white-space: pre;
    }
  </style>
</head>
<body>
  <h1>Hello Kitty</h1>
  <pre>
        *
       /|\\
   /\\_/ | \\_/\\
  ( o       o )
  (     .     )
  (   -----   )
   \\_________/
     |     |
    /       \\
   (  (| |)  )
    \\_______/
  </pre>
</body>
</html>`;

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(html, {
			headers: { 'Content-Type': 'text/html; charset=utf-8' },
		});
	},
} satisfies ExportedHandler<Env>;

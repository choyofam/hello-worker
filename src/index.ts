export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hello, World!', {
			headers: { 'Content-Type': 'text/plain' },
		});
	},
} satisfies ExportedHandler<Env>;

export async function message(ctx: any) : Promise<any> {
    return ctx.response.text('JSphere - Hello');
}
message.attributes = { method: 'GET' };

export async function message(ctx: any) : Promise<any> {
    debugger;
    return ctx.response.text('JSphere - Hello World');
}
message.attributes = { method: 'GET' };

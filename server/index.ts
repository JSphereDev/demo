export async function message(ctx: any) : Promise<any> {
    debugger;
    return ctx.response.text('JSphere - Hello There');
}
message.attributes = { method: 'GET' };

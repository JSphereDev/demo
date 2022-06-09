export async function message(ctx: any) : Promise<any> {
    debugger;
    return ctx.response.text('JSphere - Hello John');
}
message.attributes = { method: 'GET' };

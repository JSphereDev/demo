export async function message(ctx: any) : Promise<any> {
    debugger;
    return ctx.response.text('JSphere - Hello Mark');
}
message.attributes = { method: 'GET' };

exports.testGetData = async (ctx, next) => {
    ctx.body = {
        status: 1,
        message: 'Get Data From Test Get',
    }
}
const axios = require('axios')

axios.defaults.baseURL = `http://${ process.env.HOST || 'localhost'}:${process.env.PORT || 3000 }`
/**
 * 这部分自学一下 jasmine 的语法
 */
describe("Basic Syntax",  () => {
    
    it('true should be true', () => {
        console.log('================================== jasmine 基础语法测试 ======================================')
        process.stdout.write('--测试 jasmine 基础语法 true toBe true: -- ')
        expect(true).toBe(true);
    });

    it('false should be not true', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 false not toBe true: -- ')
        expect(false).not.toBe(true);
    });

    it('a should equal a', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 "a" toEqual "a" : -- ')
        expect('a').toEqual('a');
    });

    it('message should match mess', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 "message" toMatch "age" : -- ')
        expect('message').toMatch('age');
    });

    it('message should match re - /mess/', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 "message" toMatch /age/ : -- ')
        expect('message').toMatch(/age/);
    });

    it('foo should be defined', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 a.foo toBeDefined: -- ')
        let a = {foo:3}
        expect(a.foo).toBeDefined();
    });

    it('foo should be undefined', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 a.foo toBeUndefined: -- ')
        let a = {}
        expect(a.foo).toBeUndefined();
    });

    it('foo should be null', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 a.foo toBeNull: -- ')
        let a = {foo: null}
        expect(a.foo).toBeNull();
    });

    it('foo should be true', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 true toBeTruthy: -- ')
        expect(true).toBeTruthy();
    });

    it('foo should be false', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 false toBeFalsy: -- ')
        expect(false).toBeFalsy();
    });

    it('foo should be Contain', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 "Hellow World " toContain "Hello" : -- ')
        expect("Hello World").toContain("Hello");
    });

    it('foo should be GreaterThan', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 3 toBeGreaterThan 2: -- ')
        expect(3).toBeGreaterThan(2);
    });
    
    it('2 should be BeLessThan 3', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 2 toBeLessThan 3: -- ')
        expect(2).toBeLessThan(3);
    });

    it('2.9 should be BeCloseTo 3.0 within 0.2', () => {
        console.log('\n');
        process.stdout.write('--测试 jasmine 基础语法 2.9 toBeCloseTo 3.0  within 0.2 : -- ');
        expect(2.9).toBeCloseTo(3.0, 0.2);
    });

    it('function should be BeCloseTo 3.0 within 0.2', () => {
        console.log('\n');
        process.stdout.write('--测试 jasmine 基础语法 function toThrow err : -- ')
        let errFunction = function (){
            throw new Error('err');
        }
        expect(errFunction).toThrow();
    });

    it('works with promises', async (done) => {
        return await new Promise((resolve, reject) => {
            console.log('\n')
            process.stdout.write('--测试 jasmine promise 语法的 async function 的 await 执行 : -- ');
            expect(1).toBe(1);
            done()
        });
    });

});

describe("Basic Syntax",  () => {

    it('以下为系统测试代码', () => {
        console.log('\n')
        console.log("=================================== 系统功能测试 ==================================");
        console.log('\n')
    })

    it('获取用户信息', async (done) => {
        console.log('------------------------------------- user service ---------------------------------')
        console.log('\n')
        process.stdout.write('--测试 后台管理获得所有用户信息 : -- ');
        let resData = await axios.get('/api/user/getAll')
        expect(resData.data.usersDetail).toBeDefined();
        done()
    });

    it('根据 id 获取用户详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据id 获取用户详细信息 : -- ');
        let resData = await axios.post('/api/user/getById',{ id: 1 })
        expect(resData.data.user).toBeDefined();
        done()
    });

    it('根据 id 获取用户详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据id 获取用户详细信息 : -- ');
        let resData = await axios.post('/api/user/add')  // 未提供用户信息，应当不返回值
        expect(resData.data.user).toBeUndefined();
        done()
    });

    it('获取用户的用户名及对应的id 对应 key val', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 获取用户的用户名及对应的id 对应 key val : -- ');
        let resData = await axios.get('/api/user/onlyAll')
        expect(resData.data.users).toBeDefined();
        done()
    });

    it('根据用户id 修改用户信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据用户id 修改用户信息 : -- ');
        let resData = await axios.post('/api/user/modifyById') // 未提供用户id 应不以修改
        expect(resData.data.status).toEqual(0);
        done()
    });

    it('根据用户id删除用户信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据用户id删除用户信息 : -- ');
        let resData = await axios.post('/api/user/deleteById') // 未提供id ，不应删除
        expect(resData.data.status).toEqual(0); // 返回的状态值为 0 ，代表未执行或异常
        done()
    });

    it('获取多条设备信息', async (done) => {
        console.log('\n')
        console.log('------------------------------------- device service ---------------------------------')
        console.log('\n')
        process.stdout.write('--测试 多条获取设备信息 : -- ');
        let resData = await axios.get('/api/device/getAll') 
        expect(resData.data.Devices).toBeDefined();
        done()
    });

    it('获取设备的 名称(key) 及 对应的id (val)', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 获取设备的 名称(key)及对应的id (val) : -- ');
        let resData = await axios.get('/api/device/onlyAll')
        expect(resData.data.devices).toBeDefined(); 
        done()
    });

    it('添加设备', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 不提供设备详情的情况下不允许创建设备 : -- ');
        let resData = await axios.post('/api/device/add')
        expect(resData.data.status).toEqual(0); //未提供详细信息 不执行
        done()
    });

    it('根据设备id获取设备详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据设备id获取设备详细信息 : -- ');
        let resData = await axios.post('/api/device/getById',{id: 1})
        expect(resData.data.device).toBeDefined(); 
        done()
    });

    it('根据设备id修改设备详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据设备id修改设备详细信息 : -- ');
        let resData = await axios.post('/api/device/modifyById')
        expect(resData.data.status).toEqual(0);  // 未提供id，不予以修改
        done()
    });

    it('根据设备id删除设备', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据设备id删除设备 : -- ');
        let resData = await axios.post('/api/device/deleteById')
        expect(resData.data.status).toEqual(0);  // 未提供id，不予以删除
        done()
    });

    it('获取多条公告信息', async (done) => {
        console.log('\n')
        console.log('------------------------------------- rule service ---------------------------------')
        console.log('\n')
        process.stdout.write('--测试 获取多条公告信息: -- ');
        let resData = await axios.get('/api/rule/getAll') 
        expect(resData.data.rulesDetail).toBeDefined();
        done()
    });

    it('新建一条公告', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 不提供信息的情况下不允许新建公告 : -- ');
        let resData = await axios.post('/api/rule/add')
        expect(resData.data.status).toEqual(0);  // 未提供公告详细信息，不予以创建
        done()
    });

    it('根据公告id获取公告的详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据公告id获取公告的详细信息 : -- ');
        let resData = await axios.post('/api/rule/getById', {id: 1})
        expect(resData.data.rule).toBeDefined(); 
        done()
    });

    it('根据公告id修改公告的详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据公告id获取公告的详细信息 : -- ');
        let resData = await axios.post('/api/rule/modifyById') // 未提供id 不允许修改公告信息
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('根据公告id修改公告的详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据公告id获取公告的详细信息 : -- ');
        let resData = await axios.post('/api/rule/modifyById') // 未提供id 不允许修改公告信息
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('根据公告id删除公告', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据公告id删除公告 : -- ');
        let resData = await axios.post('/api/rule/deleteById') // 未提供id 不允许修改公告信息
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('获取多条消息信息', async (done) => {
        console.log('\n')
        console.log('------------------------------------- message service ---------------------------------')
        console.log('\n')
        process.stdout.write('--测试 获取多条消息信息: -- ');
        let resData = await axios.get('/api/message/getAll') 
        expect(resData.data.Messages).toBeDefined();
        done()
    });

    it('新建消息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 不提供消息详细信息，不允许新建消息 : -- ');
        let resData = await axios.post('/api/message/add') // 未提供消息的详细信息，不允许新建
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('根据消息id获取消息的详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据消息id获取消息的详细信息 : -- ');
        let resData = await axios.post('/api/message/getById',{ id: 1}) 
        expect(resData.data.thisMessage).toBeDefined(); 
        done()
    });

    it('根据消息id修改消息的详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据消息id修改消息的详细信息 : -- ');
        let resData = await axios.post('/api/message/modifyById') // 未提供id 不允许修改
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('根据消息id删除消息的详细信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据消息id删除消息的详细信息 : -- ');
        let resData = await axios.post('/api/message/deleteById') // 未提供id 不允许删除
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('获取多条预约详情信息', async (done) => {
        console.log('\n')
        console.log('------------------------------------- Apply service ---------------------------------')
        console.log('\n')
        process.stdout.write('--测试 获取多条消息信息: -- ');
        let resData = await axios.get('/api/apply/getAll') 
        expect(resData.data.applys).toBeDefined();
        done()
    });

    it('不提供预约信息情况下不允许新建信息', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 不提供预约信息情况下不允许新建信息 : -- ');
        let resData = await axios.post('/api/apply/add') // 未提供id 不允许删除
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('根据预约 id 获取预约详情', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 根据预约 id 获取预约详情 : -- ');
        let resData = await axios.post('/api/apply/getById', {id: 1}) 
        expect(resData.data.apply).toBeDefined(); 
        done()
    });

    it('未提供预约 id 不允许修改预约详情', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 未提供预约 id 不允许修改预约详情 : -- ');
        let resData = await axios.post('/api/apply/getById') // 未提供id 不允许删除
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('未提供预约 id 不允许删除预约', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 未提供预约 id 不允许删除预约 : -- ');
        let resData = await axios.post('/api/apply/deleteById') // 未提供id 不允许删除
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('尝试删除不存在的文件', async (done) => {
        console.log('\n')
        console.log('------------------------------------- upload service ---------------------------------')
        console.log('\n')
        process.stdout.write('--测试 不能够删除不存在的文件: -- ');
        let resData = await axios.post('/api/upload/deleteTempFile',{path: "一个永远不会存在的路径"})  
        expect(resData.data.status).toEqual(0);
        done()
    });

    it('不能够将一个不存在的临时文件复制到设备图片文件夹下', async (done) => {
        console.log('\n')
        process.stdout.write('--测试 不能够将一个不存在的临时文件复制到设备图片文件夹下 : -- ');
        let resData = await axios.post('/api/upload/copyTempFileToDir',{path: "一个永远不会存在的路径"}) 
        expect(resData.data.status).toEqual(0); 
        done()
    });

    it('尝试获取视频流', async (done) => {
        console.log('\n')
        console.log('------------------------------------- video service ---------------------------------')
        console.log('\n')
        process.stdout.write('--测试 尝试获取视频流: -- ');
        let resData = await axios.get('/api/video/getStream')  
        expect(resData.status).toEqual(200);
        done()
    });

});



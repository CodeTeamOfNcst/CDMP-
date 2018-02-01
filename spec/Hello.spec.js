const axios = require('axios')

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
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 2.9 toBeCloseTo 3.0  within 0.2 : -- ')
        expect(2.9).toBeCloseTo(3.0, 0.2);
    });

    it('function should be BeCloseTo 3.0 within 0.2', () => {
        console.log('\n')
        process.stdout.write('--测试 jasmine 基础语法 function toThrow err : -- ')
        let errFunction = function (){
            throw new Error('err')
        }
        expect(errFunction).toThrow();
    });

    it('works with promises', async (done) => {
        return await new Promise((resolve, reject) => {
            console.log('\n')
            process.stdout.write('--测试 jasmine promise 语法的 async function 的 await 执行 : -- ')
            expect(1).toBe(1);
            done()
        })
    });

});

describe("Basic Syntax",  () => {
    it('以下为系统测试代码', async (done) => {
        console.log('\n')
        console.log("=================================== 系统测试代码 ==================================")
        console.log('\n')
        process.stdout.write('--测试 jasmine promise 语法的 async function 的 await 执行 : -- ')
    })
});



var datetimePrinter = require('./datetime_module')

describe('Print datetime test suite', ()=>{
    it('check if datetimePrinter is function', ()=>{
        expect(typeof datetimePrinter).toBe('function')
    })
    it('check if datetimePrinter return string', ()=>{
        expect(typeof datetimePrinter()).toBe('string')
    })
})
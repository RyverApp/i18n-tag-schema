import path from 'path'
import { exportTranslationKeys } from '../lib'

describe('exportTranslationKeys', () => {
    it('should fail if rootPath param is missing', (done) => {
      const filePath = './samples/grouped.js'
      exportTranslationKeys({
          filePath, 
          logger: { toConsole: true },
          callback: (status, templates) => {
                expect(status).toEqual(1)
                expect(templates).toEqual('rootPath is not defined.')
                done()                
            }
        })
    })

    it('should export all templates from a directory', (done) => {
      const rootPath = path.resolve(__dirname, './samples')
      exportTranslationKeys({
          rootPath, 
          logger: { toConsole: true },
          callback: (status, templates) => {
                expect(status).toEqual(0)
                expect(templates).toEqual([
                    '\n        <user name="${0}">${1}</user>\n    ',
                    '\n    <users>\n    ${0}\n    </users>\n',
                    {
                        'group': 'custom group',
                        'items': [
                            'Hello ${0}, you have ${1} in your bank account.'
                        ]
                    },
                    {
                        'group': 'custom group 2',
                        'items': [
                            'Hello ${0}, you have ${1} in your bank account.'
                        ]
                    },
                    {
                        'group': 'custom inline group',
                        'items': [
                            'Hello!',
                            'Welcome!'
                        ]
                    },
                    {
                        'group': 'grouped.js',
                        'items': [
                            'Hello ${0}, you have ${1} in your bank account.',
                            'Hello!'
                        ]
                    }
                ])
                done()                
            }
        })
    })

     it('should export grouped templates as array', (done) => {
        const rootPath = path.resolve(__dirname, './samples')
        const filePath = path.resolve(__dirname, './samples/grouped.js')
        exportTranslationKeys({
          rootPath, 
          filePath, 
          logger: { toConsole: true },
          callback: (status, templates) => {
                expect(status).toEqual(0)
                expect(templates).toEqual([
                    '\n        <user name="${0}">${1}</user>\n    ',
                    '\n    <users>\n    ${0}\n    </users>\n',
                    {
                        'group': 'custom group',
                        'items': [
                            'Hello ${0}, you have ${1} in your bank account.'
                        ]
                    },
                    {
                        'group': 'custom group 2',
                        'items': [
                            'Hello ${0}, you have ${1} in your bank account.'
                        ]
                    },
                    {
                        'group': 'custom inline group',
                        'items': [
                            'Hello!',
                            'Welcome!'
                        ]
                    },
                    {
                        'group': 'grouped.js',
                        'items': [
                            'Hello ${0}, you have ${1} in your bank account.',
                            'Hello!'
                        ]
                    }
                ])
                done()                
            }
        })
    })

    it('should export multiline templates as array', (done) => {
        const rootPath = path.resolve(__dirname, './samples')
        const filePath = path.resolve(__dirname, './samples/multiline.js')
        exportTranslationKeys({
          rootPath, 
          filePath,
          callback: (status, templates) => {
                expect(status).toEqual(0)
                expect(templates).toEqual([
                    '\n        <user name="${0}">${1}</user>\n    ',
                    '\n    <users>\n    ${0}\n    </users>\n',
                    {
                        'group': 'custom inline group',
                        'items': ['Hello!']
                    }
                ])
                done()
            }
        })
    })
    
})
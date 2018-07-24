const { PATH, LAMBDA_TASK_ROOT } = process.env
const path = require('path')
process.env.PATH = PATH + ':' + path.resolve(LAMBDA_TASK_ROOT, __dirname, './lib')

module.exports.version = () => {
  return new Promise((resolve, reject) => {
    require('child_process').exec(
      'pdftk --version',
      (error, stdout, stderr) => {
        if (error) reject(error)
        else resolvee(stdout)
      }
    )
  })
}

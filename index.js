const { PATH, LAMBDA_TASK_ROOT } = process.env

const BIN = 'node_modules/pdftk-lambda/bin'

process.env.PATH = `${PATH}:${LAMBDA_TASK_ROOT}/${BIN}`
process.env.LD_LIBRARY_PATH = `${LAMBDA_TASK_ROOT}/${BIN}`
process.env.PKG_CONFIG_PATH = `${LAMBDA_TASK_ROOT}/${BIN}`

module.exports.version = () => {
  return new Promise((resolve, reject) => {
    require('child_process').exec(
      'pdftk --version',
      (error, stdout, stderr) => {
        if (error) reject(error)
        else resolve(stdout)
      }
    )
  })
}

const fs = require('fs');
const envVariables = require('../config/.env.src');

const createENVFile = (directory, variables) => {
  variables.forEach((variable) => {
    fs.appendFileSync(`./${directory}/.env`, variable + '\n');
  })
}

const buildEnv = () => {
  for(let key in envVariables){
    fs.writeFileSync(`./${key}/.env`, '')
    createENVFile(key, envVariables[key])
  }
}

buildEnv();
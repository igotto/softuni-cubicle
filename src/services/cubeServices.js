const fs = require('fs/promises')
const path = require('path')
// const cubes = require('../db.json')

const Cube = require('../models/Cube')

exports.getOne = (cubeId) => Cube.findById(cubeId)

exports.getAll = async (serach = '', fromInput, toInput) => {

  let cubes = await Cube.find().lean()

  return cubes
  // const from = Number(fromInput) || 0
  // const to = Number(toInput) || 6
  // const result = cubes
  //   .filter((x) => x.name.toLowerCase().includes(serach.toLowerCase()))
  //   .filter((x) => x.difficultyLevel >= from && x.difficultyLevel <= to)

  // return result

  
}

exports.create = (cube) => {
  // cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube })

  // let textData = JSON.stringify(cubes, '', 4)

  // return fs.writeFile(path.resolve('src', 'db.json'), textData, {
  //   encoding: 'utf-8',
  // })

  return Cube.create(cube)
}

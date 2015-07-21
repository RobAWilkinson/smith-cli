#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'CodeSmith Learning Tool',
    title       : 'Smith CLI',
    subtitle    : 'Javascript basics, the Codesmith Way',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})

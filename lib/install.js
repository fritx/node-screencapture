require('shelljs/global')
var path = require('path')
var prjlocal = require('./prjlocal')
var screencapture = '/usr/sbin/screencapture'
var sc = path.resolve(prjlocal, 'sc')

if (!which(screencapture)) return
if (which(sc)) return

mkdir('-p', prjlocal)
cp(screencapture, sc)

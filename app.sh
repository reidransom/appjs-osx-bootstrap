#!/bin/sh

basedir=`dirname "$0"`
$basedir/data/bin/AppName --harmony $basedir/data/app.js & wait

# Timber Hitch

[![Build Status](https://secure.travis-ci.org/shapeshed/timberhitch.png)](http://travis-ci.org/shapeshed/timberhitch)

A tiny module to generate a logging key, exposing the hostname, process id and an optional component name.

It is designed to be used where multiple node processes are running behind a load balancer logging to a central location. 

The generated key looks like this

    orwell.local:13691

This includes

* hostname for the process
* process id

Or this if you include a component name

    component:orwell.local:13691

This includes

* the component name
* hostname for the process
* process id


## Installation

    npm install timberhitch

## Usage

You can pass an optional component name if you wish to include that in your logging key.

    var timberhitch = require('timberhitch');
    console.log(timberhitch());

    > orwell.local:13691

    var timberhitch = require('timberhitch');
    console.log(timberhitch('component'));

    > compenent:orwell.local:28984

You can use it with any library through string concatenation.

    var winston = require('winston'),
      timberhitch = require('timberhitch'),
      loggingKey = timberhitch();
    
    winston.info(loggingKey + 'some log message');

    > info: orwell.local:13691 some log message

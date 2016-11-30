var pkg   = require('./package.json');

var output = 'dist/';
var tmp = 'tmp/';

module.exports = {
  pkg: {
    name: pkg.name
  },
  pluginOptions: {
    browser_sync: {
        port   : 1987,
        server : {
            baseDir: output
        },
        // Enable to syncronize browser input
        ghostMode: false
    },
    typescript: {
        target: "es5",
        sourceMap: true,
        noImplicitAny: true,
        declaration: true,
        noExternalResolve: false,
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        removeComments: false,
        module: "commonjs",
        moduleResolution: "node"
    }
  },
  paths: {
    base: output,
    sources: {
      statics: 'res/*.{html,js,css}',
      typescript: ['src/**/*.ts', 'typings/index.d.ts']
    },
    destinations: {
      dist: output + 'res/',
      css : output + 'res/' + 'css/',
      html: output + 'res/',
      js  : output + 'js/',
      tmp : tmp,
      ts  : output
    }
  }
};

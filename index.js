
/**
 * Module dependencies.
 */

var exec = require('child_process').exec;

/**
 * Expose `processes`.
 */

module.exports = processes;

/**
 * Process string `RegExp`.
 *
 * [process id, process group, time, command]
 * PID TTY TIME CMD
 */

var pattern = /^(\d+)\s+([^\s]+)\s+([^\s]+)\s+(.+)/;

/**
 * Get a list of running processes.
 *
 * @param {Function} fn
 */

function processes(fn) {
  var result = [];

  exec('ps -ax', function(err, stdout, stderr){
    stdout.split('\n').forEach(function(line){
      line.replace(pattern, function(_, $1, $2, $3, $4){
        result.push({ id: $1, tty: $2, time: $3, cmd: $4 });
      });
    });

    fn(err, result);
  });
}
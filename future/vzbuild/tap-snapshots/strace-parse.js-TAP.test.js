/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`strace-parse.js TAP > 001 1`] = `
{ value: 
   [ '13954',
     { openat: 
        [ 'AT_FDCWD',
          '"/etc/ld.so.cache"',
          'O_RDONLY',
          [ [ '|', 'O_CLOEXEC' ] ],
          undefined,
          { complete: { ret: '3' } } ] } ],
  rest: '' }
`

exports[`strace-parse.js TAP > 002 - 3 flags 1`] = `
{ value: 
   [ '14802',
     { openat: 
        [ 'AT_FDCWD',
          '"/proc/self/mountinfo"',
          'O_RDONLY',
          [ [ '|', 'O_LARGEFILE' ], [ '|', 'O_CLOEXEC' ] ],
          undefined,
          { complete: { ret: '3' } } ] } ],
  rest: '' }
`

exports[`strace-parse.js TAP > 003 - ENOENT 1`] = `
{ value: 
   [ '13954',
     { openat: 
        [ 'AT_FDCWD',
          '"/usr/lib/tls/libtinfo.so.6"',
          'O_RDONLY',
          [ [ '|', 'O_CLOEXEC' ] ],
          undefined,
          { complete: { err: [ '-1', 'ENOENT', '(No such file or directory)' ] } } ] } ],
  rest: '' }
`

exports[`strace-parse.js TAP > 004 - exit 1`] = `
{ value: [ '13955', { exit: null } ],
  rest: '13955 +++ exited with 0 +++' }
`

exports[`strace-parse.js TAP > 005 - 1 flag 1`] = `
{ value: 
   [ '13954',
     { openat: 
        [ 'AT_FDCWD',
          '"/usr/lib/gconv/gconv-modules.cache"',
          'O_RDONLY',
          undefined,
          undefined,
          { complete: { err: [ '-1', 'ENOENT', '(No such file or directory)' ] } } ] } ],
  rest: '' }
`

exports[`strace-parse.js TAP > 006 - mode 1`] = `
{ value: 
   [ '13954',
     { openat: 
        [ 'AT_FDCWD',
          '"/dev/null"',
          'O_WRONLY',
          [ [ '|', 'O_CREAT' ],
            [ '|', 'O_TRUNC' ],
            [ '|', 'O_LARGEFILE' ] ],
          ', 0666',
          { complete: { ret: '3' } } ] } ],
  rest: '' }
`

exports[`strace-parse.js TAP > 007 - 000 mode 1`] = `
{ value: 
   [ '13966',
     { openat: 
        [ 'AT_FDCWD',
          '"/home/andy/dev/nano-pacstrap32/newroot/var/lib/pacman/db.lck"',
          'O_WRONLY',
          [ [ '|', 'O_CREAT' ],
            [ '|', 'O_EXCL' ],
            [ '|', 'O_LARGEFILE' ],
            [ '|', 'O_CLOEXEC' ] ],
          ', 000',
          { complete: { ret: '4' } } ] } ],
  rest: '' }
`

exports[`strace-parse.js TAP > 008 - unfinished 1`] = `
{ value: 
   [ '14005',
     { openat: 
        [ 'AT_FDCWD',
          '"/proc/self/fd"',
          'O_RDONLY',
          [ [ '|', 'O_LARGEFILE' ], [ '|', 'O_DIRECTORY' ] ],
          undefined,
          { unfinished: null } ] } ],
  rest: '' }
`

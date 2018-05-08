var gulp = require('gulp');
let exec = require('child_process').exec;

gulp.task('watch', () => {
    gulp.watch('contracts/**/*.sol', ['build-contracts']);
});

gulp.task('build-contracts', () => {
    exec('sh build.sh', (err, stdout, stderr) => {
        if (!err) {
            console.log('Build successful! ◕ ‿ ◕');
        } else {
            console.log('Failed to compile contracts', err, stdout, stderr);
        }
    });
});


gulp.task('default', ['watch']);
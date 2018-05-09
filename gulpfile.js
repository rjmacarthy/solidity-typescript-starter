var gulp = require('gulp');
let exec = require('child_process').exec;

gulp.task('watch', () => {
    gulp.watch('contracts/**/*.sol', ['build-contracts']);
});

gulp.task('watch:windows', () => {
    gulp.watch('contracts/**/*.sol', ['build-contracts-windows']);
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

gulp.task('build-contracts-windows', () => {
    console.log('Building contracts and interfaces...');
    exec(`npm run clean && cd ./contracts && solcjs Base.sol Ownable.sol Contract.sol --abi --bin -o ../abis && npm run parse`, (err, stdout, stderr) => {
        if (!err && !stderr) {
            console.log('Build successful! ◕ ‿ ◕');
        } else {
            console.error(stderr);
        }
    });
});



gulp.task('default', ['watch']);
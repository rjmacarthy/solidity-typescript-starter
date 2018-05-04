var gulp = require('gulp');
let exec = require('child_process').exec;

gulp.task('watch', () => {
    gulp.watch('contracts/**/*.sol', ['truffle-compile']);
});

gulp.task('truffle-compile', () => {
    exec('truffle compile', (err, stdout, stderr) => {
        if (!err) {
            console.log('Truffle build successful! ◕ ‿ ◕');
            generateAbi();
            generateBin();
        } else {
            console.log('Failed to compile contracts', err, stdout, stderr);
        }
    });
});

generateAbi = () => {
    exec("solcjs ./contracts/Contract.sol --abi -o ../abis", (err, stdout, stderr) => {
        if (!err) {
            console.log('abi generated successfully! ◕ ‿ ◕');
        } else {
            console.log('Failed to generate abi', err, stdout, stderr);
        }
    })
}

generateBin = () => {
    exec("solcjs ./contracts/Contract.sol --bin -o ../abis", (err, stdout, stderr) => {
        if (!err) {
            console.log('bin generated successfully! ◕ ‿ ◕');
        } else {
            console.log('Failed to generate bin', err, stdout, stderr);
        }
    })
}

gulp.task('default', ['watch']);
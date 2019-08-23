const folder2branch = require('../index.js');
new folder2branch.Deployer({

    folder: 'test/_dist',

    // 不部署 html 
    pattern: '**/!(*.html)',
    branch:'esinaimgcn',
    repo:'https://github.com/chancedai/folder2branch',
    finish: function () {

    }
});

new folder2branch.Deployer({

    folder: 'test/_dist',

    // 只部署 html
    pattern: '**/*.html',
    branch:'server',
    repo:'https://github.com/chancedai/folder2branch',
    finish: function () {

    }
});

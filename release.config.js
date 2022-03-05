module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/manupm/my-react-app",
    plugins: [
        '@semantic-release/commit-analyzer', // analyse the commit messages and decid what our next version will be based on these commit messages 
        '@semantic-release/release-notes-generator', // generates release-notes for our release based on our commit messages descriptions
        //'@semantic-release/npm', // useful to release an npm package
        '@semantic-release/github']  // responsible for creating a hitub release
}
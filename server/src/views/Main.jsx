const React = require('react');
const Layout = require('./Layout')

module.exports = function Main({ user }) {
    return (
        <Layout user={user}>
            <h1>Hello</h1>
        </Layout>
    );
};
const React = require('react');
const Layout = require('./Layout')

module.exports = function Main({ user, mainTopics }) {
    return (
        <Layout user={user}>
            {user ?
                (
                    <>
                        {mainTopics.map((el) => (
                            <div>
                                <h1>{el.tema}</h1>
                                <a href={`/game/${el.id}`} className="btn btn-dark">Dark</a>
                            </div>
                        ))}
                    </>
                )
                :
                (
                    null
                )}
        </Layout>
    );
};
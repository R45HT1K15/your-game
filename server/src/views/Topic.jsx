const React = require('react');
const Layout = require('./Layout')

module.exports = function Topic({ user, topic }) {
    return (
        <Layout user={user}>
            {user ?
                (
                    <>
                        {topic.map((el) => (
                            <div>
                                <h1>{el.name}</h1>
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
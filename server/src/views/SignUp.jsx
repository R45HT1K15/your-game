const React = require('react');
const Layout = require('./Layout')

module.exports = function Main({ }) {
    return (
        <Layout>
            <div className='form-position'>
                <form method='POST' action='/signup'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
                        <input name='name' type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    );
};
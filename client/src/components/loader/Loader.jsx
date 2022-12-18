import React from 'react'
import {Watch} from 'react-loader-spinner'
 export default class AppLoader extends React.Component {
    render() {
     return(
        <Watch
        height="80"
        width="80"
        radius="48"
        color="#0d6efd"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
     );
    }
 }
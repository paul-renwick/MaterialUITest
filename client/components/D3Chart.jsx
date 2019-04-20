import React from 'react'
import BarChart from './BarChart'

export default class d3Chart extends React.Component {

    render() {
        return(
            <>
                 <BarChart data={[5,10,1,3]} size={[500,500]} />
            </>
        )
    }
}


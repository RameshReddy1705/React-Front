import React from 'react'
import { data } from './data'


function Demo1() {
    const items = data.map((item)=>
                <img src={item.image}/>
                )
    return (
        <div>
            
            {items}

        </div>
    )
}

export default Demo1

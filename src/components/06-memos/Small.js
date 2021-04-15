import React, { memo } from 'react'

export const Small = memo((props) => {
    const { value } = props;
        console.log('Me volví a llamar :(');
    
        return (
            <small>{ value }</small>
        )
    }
)

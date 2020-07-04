import React from 'react'

type CardsHeaderPropsType = {
    name: string
    title: string
    sortUp: (e: React.MouseEvent<HTMLButtonElement>) => void
    sortDown: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CardsHeader: React.FC<CardsHeaderPropsType> = ({name,title,sortDown,sortUp}) => {


    return (
        <div>
            {title}
            <>
                <button onClick={sortUp} name={name}>&#8593;</button>
                <button onClick={sortDown} name={name}>&#8595;</button>
            </>

        </div>
    )
}

export default CardsHeader



import React from 'react';

type Props = {
    id: string,
    name: string,
    // clicked: (event: React.MouseEvent<HTMLElement>) => void
}

const Rocket = ({ id, name }: Props) => 
    <li> { name } </li>

export default Rocket;
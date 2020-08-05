import React from 'react';

type Props = {
    id: number,
    name: string,
    clicked: (event: React.MouseEvent<HTMLElement>) => void
}

const Rocket = ({ id, name, clicked }: Props) => 
    <li key={id} onClick={clicked}> { name } </li>

export default Rocket;
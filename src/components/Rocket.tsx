import React from 'react';

type Props = {
    id: string,
    name: string,
    clicked: (event: React.MouseEvent<HTMLElement>) => void
}

const Rocket = ({ id, name, clicked }: Props) => 
    <li onClick={ clicked } > { name } </li>

export default Rocket;
import React from 'react';

type RocketProps = {
    id: number,
    name: string
}

const Rocket = ({ id, name }: RocketProps) => 
    <li key={id}> { name } </li>

export default Rocket;
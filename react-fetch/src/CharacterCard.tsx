import React from 'react';
import { ICharacter } from './types'

interface ICharacterCardProps {
  character: ICharacter;
}

const CharacterCard: React.FC<ICharacterCardProps> = props => {
  return (
    <div className='character-card'>

    </div>
  )
}

export default CharacterCard;

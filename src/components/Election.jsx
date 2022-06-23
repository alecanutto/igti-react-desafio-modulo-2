import React from 'react';

import Candidates from './Candidates';

import { formatDecimal } from '../helpers/functions';

export default function Election({ children: candidates, city }) {
  if (candidates.length === 0) return '';

  const { name, votingPopulation, absence, presence } = city;

  return (
    <div className="border p-2 mb-4">
      <p className="text-center font-semibold text-xl p-2">Eleição em {name}</p>
      <div className="flex items-center justify-center space-x-5">
        <span className="text-center font-semibold">
          Total de eleitores: {formatDecimal(votingPopulation)}
        </span>
        <span className="text-center font-semibold">
          Abstenção: {formatDecimal(absence)}
        </span>
        <span className="text-center font-semibold">
          Comparecimento: {formatDecimal(presence)}
        </span>
      </div>
      <Candidates>{candidates}</Candidates>
    </div>
  );
}

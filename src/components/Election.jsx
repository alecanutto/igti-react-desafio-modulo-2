import React, { useEffect, useState } from 'react';

import Candidates from './Candidates';

import { formatDecimal } from '../helpers/functions';
import { apiGetElectionByCity } from '../services/apiService';

export default function Election({ children: data }) {
  const { id, name, votingPopulation, absence, presence } = data;
  const [allCandidates, setAllCandidates] = useState([]);

  useEffect(() => {
    async function getAllData() {
      const backendAllCandidates = await apiGetElectionByCity(id);
      setAllCandidates(backendAllCandidates.sort((a, b) => b.votes - a.votes));
    }

    getAllData();
  }, [id]);

  return (
    <div>
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
      {allCandidates.length > 0 ? <Candidates>{allCandidates}</Candidates> : ''}
    </div>
  );
}

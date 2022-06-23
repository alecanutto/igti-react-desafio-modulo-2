import { useEffect, useState } from 'react';
import { apiGetCandidateById } from '../services/apiService';
import Item from './Item';

export default function Candidate({ children: data }) {
  const [candidate, setCandidate] = useState({});

  const { candidateId, votes, percentage, elected } = data;

  useEffect(() => {
    async function getAllData() {
      const backendCandidate = await apiGetCandidateById(candidateId);
      setCandidate(...backendCandidate);
    }

    getAllData();
  }, [candidateId]);

  const { name, username } = candidate;

  return (
    <div
      className={`shadow-lg m-2 w-52 h-60
                flex flex-row items-center justify-center flex-wrap
                font-semibold`}
    >
      <Item
        name={name}
        username={username}
        votes={votes}
        percentage={percentage}
        elected={elected}
      />
    </div>
  );
}

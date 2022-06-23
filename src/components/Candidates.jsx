import Candidate from './Candidate';

export default function Candidates({ children: data }) {
  if (data.length === 0) {
    return <div>Impossível renderizar os dados</div>;
  }

  const totalVotes = data
    .map(({ candidateVotes: votes }) => votes)
    .reduce((total, votes) => (total += votes));

  let elected = true;

  return (
    <>
      <p className="text-center font-semibold p-2"> {data.length} candidatos</p>
      <div className="flex flex-row items-center justify-center flex-wrap p-4">
        {data.map(candidate => {
          const percentage = candidate.candidateVotes / totalVotes;
          const newCandidate = { ...candidate, percentage, elected };
          elected = false;
          return (
            <Candidate key={candidate.candidateId}>{newCandidate}</Candidate>
          );
        })}
      </div>
    </>
  );
}

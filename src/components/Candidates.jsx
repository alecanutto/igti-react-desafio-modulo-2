import Candidate from './Candidate';

export default function Candidates({ children: data }) {
  if (data === undefined) {
    return <div>Impossível renderizar os dados</div>;
  }

  const totalVotes = data
    .map(({ votes }) => votes)
    .reduce((total, votes) => (total += votes));

  let elected = true;

  return (
    <>
      <p className="text-center font-semibold p-2"> {data.length} candidatos</p>
      <div className="flex flex-row items-center justify-center flex-wrap p-4">
        {data.map(({ candidateId, votes }) => {
          const percentage = votes / totalVotes;
          const candidate = { candidateId, votes, percentage, elected };
          elected = false;
          return <Candidate key={candidateId}>{candidate}</Candidate>;
        })}
      </div>
    </>
  );
}

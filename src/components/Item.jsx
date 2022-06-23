import { formatDecimal, formatPercent } from '../helpers/functions';

export default function Item({ children: candidate }) {
  const {
    candidateName: name,
    candidateUsername: username,
    candidateVotes: votes,
    percentage,
    elected,
  } = candidate;

  console.log(username);

  const candidateColor = elected ? 'text-green-400' : 'text-red-400';

  return (
    <div className="flex flex-col justify-between">
      <div className="flex items-center justify-between space-x-8">
        <img
          className="w-16 rounded-full"
          src={`/img/${username}.png`}
          alt={username}
        />
        <div className="flex flex-col justify-center">
          <span className={`font-semibold text-xl ${candidateColor}`}>
            {formatPercent(percentage)}
          </span>
          <span className="font-semibold text-sm">
            {formatDecimal(votes)} votos
          </span>
        </div>
      </div>
      <div className="text-center mt-6 space-y-6">
        <p className="text-xl">{name}</p>
        <p className={candidateColor}>{elected ? 'Eleito' : 'Não eleito'}</p>
      </div>
    </div>
  );
}

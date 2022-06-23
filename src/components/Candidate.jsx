import Item from './Item';

export default function Candidate({ children: candidate }) {
  return (
    <div
      className={`shadow-lg m-2 w-52 h-60
                flex flex-row items-center justify-center flex-wrap
                font-semibold`}
    >
      <Item>{candidate}</Item>
    </div>
  );
}

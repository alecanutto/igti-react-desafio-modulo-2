import React from 'react';

export default function SelectOption({
  children: data = null,
  title = '',
  onSelectChange = null,
}) {
  if (!data) {
    return <div>Impossível renderizar os dados</div>;
  }

  function handleSelectChange({ currentTarget }) {
    if (onSelectChange) {
      const newValue = data.filter(({ id }) => id === currentTarget.value);
      onSelectChange(newValue);
    }
  }

  return (
    <div className="flex flex-row justify-center p-4 mb-4">
      <label htmlFor="filter" className="text-xl font-semibold">
        {title}
      </label>
      <select
        defaultValue={''}
        name="filter"
        className="rounded-md border border-gray-150 ml-2 w-52"
        onChange={handleSelectChange}
      >
        <option value="">Selecione</option>
        {data.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

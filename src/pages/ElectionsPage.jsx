import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

import { apiGetAllCities } from '../services/apiService';

import SelectOption from '../components/SelectOption';
import Election from '../components/Election';

import { isValid } from '../helpers/functions';

export default function ElectionsPage() {
  const [allCities, setAllCities] = useState([]);
  const [cityFilter, setCityFilter] = useState({});

  useEffect(() => {
    async function getAllData() {
      const backendAllCities = await apiGetAllCities();
      setAllCities(backendAllCities);
    }

    getAllData();
  }, []);

  async function handleCityFilterChange(newCityFilter) {
    const [{ ...city }] = newCityFilter;
    setCityFilter(city);
  }

  return (
    <>
      <Header>react-elections v1.01</Header>
      <Main>
        <SelectOption
          title="Escolha o município"
          onSelectChange={handleCityFilterChange}
        >
          {allCities}
        </SelectOption>
        {isValid(cityFilter) ? (
          <div className="border p-2 mb-4">
            <Election>{cityFilter}</Election>
          </div>
        ) : (
          ''
        )}
      </Main>
    </>
  );
}

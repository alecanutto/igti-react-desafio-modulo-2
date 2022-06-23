import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

import {
  apiGetAllCandidates,
  apiGetAllCities,
  apiGetAllElections,
} from '../services/apiService';

import SelectOption from '../components/SelectOption';
import Election from '../components/Election';

import { isValid } from '../helpers/functions';

export default function ElectionsPage() {
  const [allCities, setAllCities] = useState([]);
  const [allElections, setAllElections] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);
  const [filteredCity, setFilteredCity] = useState({});
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function getAllData() {
      const backendAllCities = (await apiGetAllCities()).sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      const backendAllElections = await apiGetAllElections();
      const backendAllCandidates = await apiGetAllCandidates();

      setAllCities(backendAllCities);
      setAllElections(backendAllElections);
      setAllCandidates(backendAllCandidates);
    }

    getAllData();
  }, []);

  function gatherDate(city) {
    if (!isValid(city)) {
      setFilteredCity({});
      setCandidates([]);
      return;
    }

    const candidatesByCity = allElections.filter(
      election => election.cityId === city.id
    );

    const candidates = candidatesByCity.map(({ candidateId, votes }) => {
      const candidateById = allCandidates.find(({ id }) => id === candidateId);
      return {
        candidateId,
        candidateName: candidateById.name,
        candidateUsername: candidateById.username,
        candidateVotes: votes,
      };
    });

    setFilteredCity(city);
    setCandidates(candidates);
  }

  function handleCityFilterChange(city) {
    gatherDate(...city);
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
        <Election city={filteredCity}>{candidates}</Election>
      </Main>
    </>
  );
}

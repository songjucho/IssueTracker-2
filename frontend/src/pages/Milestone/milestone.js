import React from 'react';
import Header from '../../components/Common/Header';
import NavButton from '../../components/Milestone/navButton';
import MileStoneList from '../../components/Milestone/milestoneList';

const Milestone = props => {
  return (
    <>
      <Header />
      <NavButton />
      <MileStoneList />
    </>
  );
};

export default Milestone;

import React, { useState, useEffect } from 'react';

export default function AllMatches(props) {

  useEffect (() => {

    props.getMatches()
    
  }, []);

    return (
      <div >

        <h1>Lista de Macthes</h1>
        {props.matchesList}

        {props.addMatchesList}
        
      </div>
    );
  }
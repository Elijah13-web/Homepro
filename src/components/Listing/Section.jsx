import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionDb } from '../db';
import PropertyCard from '../cards/PropertyCard';

const Section = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="grid sm:grid-cols-2 gap-8 min-h-[100vh]">
      {SectionDb && SectionDb.length > 0 && SectionDb.map((property) => (
        <div key={property._id} onClick={() => handleCardClick(property._id)} className="cursor-pointer">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
};

export default Section;

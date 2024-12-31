import React, { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import ProfileGrid from './components/ProfileGrid';
import AgeFilter from './components/AgeFilter';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [ageFilter, setAgeFilter] = useState('all');

  const handleAddProfile = (newProfile) => {
    setProfiles(prev => [...prev, newProfile]);
  };

  const handleDeleteProfile = (id) => {
    setProfiles(prev => prev.filter(profile => profile.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          User Profile Card Generator
        </h1>
        
        <ProfileForm onAddProfile={handleAddProfile} />
        
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Filter Profiles</h2>
          <AgeFilter value={ageFilter} onChange={setAgeFilter} />
        </div>
        
        <ProfileGrid
          profiles={profiles}
          onDelete={handleDeleteProfile}
          ageFilter={ageFilter}
        />
      </div>
    </div>
  );
}

export default App;
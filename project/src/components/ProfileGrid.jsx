import React from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';

const ProfileGrid = ({ profiles, onDelete, ageFilter }) => {
  const filteredProfiles = profiles.filter(profile => {
    if (ageFilter === 'under18') return profile.age < 18;
    if (ageFilter === '18-30') return profile.age >= 18 && profile.age <= 30;
    if (ageFilter === 'over30') return profile.age > 30;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredProfiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

ProfileGrid.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      profilePicture: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  ageFilter: PropTypes.string.isRequired
};

export default ProfileGrid;
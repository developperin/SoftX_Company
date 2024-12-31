import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({ profile, onDelete }) => {
  const isUnderage = profile.age < 18;

  return (
    <div className={`rounded-lg shadow-md p-6 ${isUnderage ? 'bg-yellow-50' : 'bg-white'}`}>
      <div className="relative">
        <img
          src={profile.profilePicture}
          alt={profile.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150';
          }}
        />
        {isUnderage && (
          <span className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
            Underage
          </span>
        )}
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{profile.name}</h3>
        <p className="text-gray-600 mb-1">{profile.email}</p>
        <p className="text-gray-600 mb-4">Age: {profile.age}</p>
        
        <button
          onClick={() => onDelete(profile.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    profilePicture: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ProfileCard;
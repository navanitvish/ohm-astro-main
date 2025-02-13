import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-autocomplete';
import { MapPin } from 'lucide-react';

const LocationAutocomplete = ({ onLocationSelect, defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue || '');

  return (
    <div className="relative flex-1">
      <GooglePlacesAutocomplete
        apiKey="YOUR_GOOGLE_API_KEY"
        onPlaceSelected={(place) => {
          if (place.geometry) {
            const location = {
              address: place.formatted_address,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng()
            };
            setInputValue(place.formatted_address);
            onLocationSelect(location);
          }
        }}
        options={{
          types: ['(cities)'],
          fields: ['formatted_address', 'geometry']
        }}
        defaultValue={inputValue}
        className="w-full p-2 border rounded-md pl-10"
        placeholder="Search for a location..."
      />
      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default LocationAutocomplete;
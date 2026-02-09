import React, { useState } from 'react'
import { MapPin } from 'lucide-react'

const MapPicker = ({ onLocationChange }) => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  // Mock map click handler
  const handleMapClick = () => {
    // Simulate getting coordinates from a map click
    const lat = (Math.random() * 180 - 90).toFixed(6)
    const lng = (Math.random() * 360 - 180).toFixed(6)
    
    setLatitude(lat)
    setLongitude(lng)
    
    if (onLocationChange) {
      onLocationChange({ latitude: lat, longitude: lng })
    }
  }

  return (
    <div className="space-y-3">
      <div 
        className="h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors"
        onClick={handleMapClick}
      >
        <div className="text-center">
          <MapPin size={32} className="text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500 text-sm">Click to select location on map</p>
          <p className="text-gray-400 text-xs mt-1">or drag the marker</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Latitude
          </label>
          <input
            type="text"
            value={latitude}
            readOnly
            className="input-field bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Longitude
          </label>
          <input
            type="text"
            value={longitude}
            readOnly
            className="input-field bg-gray-50"
          />
        </div>
      </div>
    </div>
  )
}

export default MapPicker
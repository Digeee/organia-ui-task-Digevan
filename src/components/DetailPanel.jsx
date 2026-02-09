import React, { useState } from 'react'
import FormInput from './FormInput'
import MapPicker from './MapPicker'

const DetailPanel = ({ title }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactPerson: '',
    contactNumber: '',
    latitude: '',
    longitude: '',
    province: '',
    district: '',
    city: '',
    street: '',
    addressNote: ''
  })

  const provinces = [
    { value: 'western', label: 'Western Province' },
    { value: 'central', label: 'Central Province' },
    { value: 'southern', label: 'Southern Province' },
    { value: 'northern', label: 'Northern Province' },
    { value: 'eastern', label: 'Eastern Province' }
  ]

  const districts = [
    { value: 'colombo', label: 'Colombo' },
    { value: 'gampaha', label: 'Gampaha' },
    { value: 'kalutara', label: 'Kalutara' },
    { value: 'kandy', label: 'Kandy' },
    { value: 'matara', label: 'Matara' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleLocationChange = (location) => {
    setFormData(prev => ({
      ...prev,
      latitude: location.latitude,
      longitude: location.longitude
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-blue-900 px-6 py-4">
        <h2 className="text-white font-semibold text-lg">{title}</h2>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <FormInput
            label="First Name"
            required
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Enter first name"
          />
          <FormInput
            label="Last Name"
            required
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Enter last name"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <FormInput
            label="Contact Person Name"
            required
            value={formData.contactPerson}
            onChange={(e) => handleInputChange('contactPerson', e.target.value)}
            placeholder="Enter contact person name"
          />
          <FormInput
            label="Contact Number"
            required
            value={formData.contactNumber}
            onChange={(e) => handleInputChange('contactNumber', e.target.value)}
            placeholder="+94"
          />
        </div>
        
        <div className="mb-4 sm:mb-6">
          <MapPicker onLocationChange={handleLocationChange} />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
          <FormInput
            label="Province"
            required
            type="select"
            options={provinces}
            value={formData.province}
            onChange={(e) => handleInputChange('province', e.target.value)}
          />
          <FormInput
            label="District"
            required
            type="select"
            options={districts}
            value={formData.district}
            onChange={(e) => handleInputChange('district', e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
          <FormInput
            label="City"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            placeholder="Enter city"
          />
          <FormInput
            label="Street / Lane"
            value={formData.street}
            onChange={(e) => handleInputChange('street', e.target.value)}
            placeholder="Enter street/lane"
          />
        </div>
        
        <FormInput
          label="Address Note"
          required
          type="textarea"
          value={formData.addressNote}
          onChange={(e) => handleInputChange('addressNote', e.target.value)}
          placeholder="Enter address note"
        />
      </div>
    </div>
  )
}

export default DetailPanel
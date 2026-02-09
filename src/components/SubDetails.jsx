import React, { useState } from 'react'
import FormInput from './FormInput'

const SubDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    totalValue: '',
    description: '',
    quantity: '',
    number: '',
    weight: '',
    height: '',
    length: '',
    width: ''
  })

  const types = [
    { value: 'type1', label: 'Type 1' },
    { value: 'type2', label: 'Type 2' },
    { value: 'type3', label: 'Type 3' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-blue-900 px-6 py-4">
        <h2 className="text-white font-semibold text-lg">Sub Details</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <FormInput
            label="Name"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Enter name"
          />
          <FormInput
            label="Type"
            type="select"
            options={types}
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
          />
          <FormInput
            label="Total Value"
            value={formData.totalValue}
            onChange={(e) => handleInputChange('totalValue', e.target.value)}
            placeholder="Enter total value"
          />
          <FormInput
            label="Description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Enter description"
          />
        </div>
        
        <div className="grid grid-cols-6 gap-4">
          <FormInput
            label="Quantity"
            required
            value={formData.quantity}
            onChange={(e) => handleInputChange('quantity', e.target.value)}
            placeholder="Enter quantity"
          />
          <FormInput
            label="Number"
            value={formData.number}
            onChange={(e) => handleInputChange('number', e.target.value)}
            placeholder="Enter number"
          />
          <FormInput
            label="Weight (Kg)"
            value={formData.weight}
            onChange={(e) => handleInputChange('weight', e.target.value)}
            placeholder="Enter weight"
          />
          <FormInput
            label="Height (m)"
            value={formData.height}
            onChange={(e) => handleInputChange('height', e.target.value)}
            placeholder="Enter height"
          />
          <FormInput
            label="Length (m)"
            value={formData.length}
            onChange={(e) => handleInputChange('length', e.target.value)}
            placeholder="Enter length"
          />
          <FormInput
            label="Width"
            value={formData.width}
            onChange={(e) => handleInputChange('width', e.target.value)}
            placeholder="Enter width"
          />
        </div>
      </div>
    </div>
  )
}

export default SubDetails
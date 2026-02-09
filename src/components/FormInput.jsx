import React from 'react'

const FormInput = ({ 
  label, 
  type = 'text', 
  required = false, 
  placeholder = '', 
  value, 
  onChange, 
  options = [],
  className = '',
  ...props 
}) => {
  const renderInput = () => {
    if (type === 'select') {
      return (
        <select
          className={`input-field ${className}`}
          value={value}
          onChange={onChange}
          {...props}
        >
          <option value="">{placeholder || 'Select...'}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )
    }
    
    if (type === 'textarea') {
      return (
        <textarea
          className={`input-field min-h-[100px] ${className}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      )
    }
    
    return (
      <input
        type={type}
        className={`input-field ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    )
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {renderInput()}
    </div>
  )
}

export default FormInput
export const isNotEmpty = (value) => value.trim() !== ''
export const isNumber = (value) => !isNaN(parseInt(value))
export const isSelected = (value) => value !== '' || value !== 'None'

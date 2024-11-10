const validateFieldName = (request, response, next) => {
    const { body } = request;
  
    if (body.name === undefined) {
      return response.status(400).json({ message: 'The field "name" is required' });
    }
  
    if (body.name === '') {
      return response.status(400).json({ message: 'name cannot be empty' });
    }
  
    next();
  };
  
const validateFieldPhoneNumber = (request, response, next) => {
    const { body } = request;
  
    if (body.phone_number === undefined) {
      return response.status(400).json({ message: 'The field "phone number" is required' });
    }
  
    if (body.phone_number === '') {
      return response.status(400).json({ message: 'phone number cannot be empty' });
    }
  
    next();
  };
  
const validateFieldAddress = (request, response, next) => {
    const { body } = request;
  
    if (body.address === undefined) {
      return response.status(400).json({ message: 'The field "address" is required' });
    }
  
    if (body.address === '') {
      return response.status(400).json({ message: 'address cannot be empty' });
    }
  
    next();
  };

  module.exports = {
    validateFieldName,
    validateFieldPhoneNumber,
    validateFieldAddress
  };
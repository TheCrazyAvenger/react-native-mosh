import * as yup from 'yup';

export const postSchema = yup.object().shape({
  title: yup.string().required().min(1).label('Title'),
  price: yup.number().required().min(1).max(10000).label('Price'),
  description: yup.string().label('Description'),
  category: yup.string().required().label('Category'),
  images: yup.array().min(1, 'Please select at least one image.'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required().min(1).label('Email'),
  password: yup.string().required().min(5).max(16).label('Password'),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required().min(1).max(12).label('Name'),
  email: yup.string().email().required().min(1).label('Email'),
  password: yup.string().required().min(5).max(16).label('Password'),
});

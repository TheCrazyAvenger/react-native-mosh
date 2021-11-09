import * as yup from 'yup';

export const postSchema = yup.object().shape({
  images: yup.array().min(1, 'Please select at least one image.'),
});

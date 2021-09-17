import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().required('First name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().oneOf(['small', 'medium', 'large', 'extraLarge'], 'Size is required!'),
    pepperoni: yup.boolean(),
    bananaPeppers: yup.boolean(),
    olives: yup.boolean(),
    sushi: yup.boolean(),
    special: yup.string(),
});

export default formSchema;
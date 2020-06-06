import * as Yup from 'yup';

export default Yup.object().shape({
  country: Yup.string.min(3, 'Inseria pelo menos a sigla de um país'),
});

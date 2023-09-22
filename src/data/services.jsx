import {
  womens_haircuts,
  mens_haircuts,
  hair_coloring,
  cosmetology,
  massage,
  makeup,
  nail_service,
  solarium,
  tattooing,
} from '../assets';

const servicesData = [
  { id: 1, serviceName: 'Женские стрижки', image: womens_haircuts },
  { id: 2, serviceName: 'Мужские стрижки', image: mens_haircuts },
  { id: 3, serviceName: 'Окрашивание волос', image: hair_coloring },
  { id: 4, serviceName: 'Косметология', image: cosmetology },
  { id: 5, serviceName: 'Массаж', image: massage },
  { id: 6, serviceName: 'Макияж', image: makeup },
  { id: 7, serviceName: 'Ногтевой сервис', image: nail_service },
  { id: 8, serviceName: 'Солярий', image: solarium },
  { id: 9, serviceName: 'Татуаж', image: tattooing },
];

export default servicesData;

import basicInfo from './basicInfo';
import components from './components';
import servers from './servers';
import tags from './tags';
import userRoute from './users';

export default {
    ...basicInfo,
    ...components,
    ...servers,
    ...tags,
    ...userRoute,
};

import simpleRestProvider from '../simpleRestProvider';

const restProvider = simpleRestProvider('http://localhost:8080/api/v1');
export default (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(() => resolve(restProvider(type, resource, params)), 500)
    );

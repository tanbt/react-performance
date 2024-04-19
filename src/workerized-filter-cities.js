// TAN: this dependency is error! Can't use
// import makeFilterCitiesWorker from 'workerize!./filter-cities'

// const {getItems} = makeFilterCitiesWorker()

// export {getItems}

import {getItems as syncGetItems} from './filter-cities'

const getItems = async () => syncGetItems()
export {getItems}

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/

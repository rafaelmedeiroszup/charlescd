import { Circle } from '../../../../interfaces/Circle'

export const MetricsGroupsResume = [
  {
    id: '1',
    createdAt: '2020-09-05T12:20:40.406925Z',
    name: 'Metrics group 1',
    metricsCount: 1,
    thresholds: 10,
    thresholdsReached: 0,
    status: 'ACTIVE',
  },
  {
    id: '2',
    createdAt: '2020-09-04T12:20:40.406925Z',
    name: 'Metrics group 2',
    metricsCount: 2,
    thresholds: 3,
    thresholdsReached: 3,
    status: 'ACTIVE',
  },{
    id: '3',
    createdAt: '2020-09-03T12:20:40.406925Z',
    name: 'Metrics group 3',
    metricsCount: 3,
    thresholds: 4,
    thresholdsReached: 2,
    status: 'ERROR',
  },{
    id: '4',
    createdAt: '2020-09-02T12:20:40.406925Z',
    name: 'Metrics group 4',
    metricsCount: 4,
    thresholds: 5,
    thresholdsReached: 4,
    status: 'REACHED',
  },
  {
    id: '5',
    createdAt: '2020-09-01T12:20:40.406925Z',
    name: 'Metrics group 5',
    metricsCount: 5,
    thresholds: 0,
    thresholdsReached: 0,
    status: 'ACTIVE',
  },
  {
    id: '6',
    createdAt: '2020-08-30T12:20:40.406925Z',
    name: 'Metrics group 6',
    metricsCount: 6,
    thresholds: 1,
    thresholdsReached: 0,
    status: 'ACTIVE',
  }
];

export const circleData: Circle = {
  id: '427',
  name: 'yyz',
  author: {
    id: '1980',
    name: 'Rush',
    email: 'rush@zup',
    createdAt: 'old'
  },
  createdAt: '1981',
  deployment: undefined,
  rules: undefined
};

export const newCircleData: Circle = {
  id: undefined,
  name: undefined,
  author: undefined,
  createdAt: undefined,
  deployment: undefined,
  rules: undefined
};

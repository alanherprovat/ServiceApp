import { lazy } from 'react';

export const serviceRouteList = [
    {
        url: '',
        component: lazy(() => import('../components/serviceComponents/ipoRequests/ipoIndex')),
    },
    {
        url: 'withdrawalRequest',
        component: lazy(() => import('../components/serviceComponents/withdrawalRequests/WithdrawalIndex')),
    },
    
    {
        url: 'serviceConsoleDashboard',
        component: lazy(() => import('../components/serviceComponents/ServiceConsoleDashboard'))
    },
    {
        url: 'depositRequest',
        component: lazy(() => import('../components/serviceComponents/depositRequests/DepositIndex')),
    },
    {
        url: 'changeRequest',
        component: lazy(() => import('../components/serviceComponents/changeRequests/ChangeRequestIndex')),
    },
];
// export const unAuthorizedRoutes = [
//     {
//         url: '/',
//         component: lazy(() => import('../components/Login/Login'))
//     },
//     {
//         url: '/login',
//         component: lazy(() => import('../components/Login/Login'))
//     }
// ]


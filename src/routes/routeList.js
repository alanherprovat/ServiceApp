import { lazy } from 'react';

export const serviceRouteList = [
    {
        url: '/',
        component: lazy(() => import('../components/serviceComponents/ipoRequests/home')),
    },
    {
        url: '/cashDeposit',
        component: lazy(() => import('../components/serviceComponents/depositRequests/CashDeposit')),
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


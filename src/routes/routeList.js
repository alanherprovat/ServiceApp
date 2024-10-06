import { lazy } from 'react';

export const serviceRouteList = [
    {
        url: '/',
        component: lazy(() => import('../components/serviceComponents/ipoRequests/home')),
    },
    {
        url: '/serviceConsoleDashboard',
        component: lazy(() => import('../components/serviceComponents/ServiceConsoleDashboard'))
    },
    {
        url: '/depositRequest',
        component: lazy(() => import('../components/serviceComponents/depositRequests/DepositIndex')),
    },
    {
        url: '/cashDeposit',
        component: lazy(() => import('../components/serviceComponents/depositRequests/CashDeposit')),
    },
    {
        url: '/fundTransfer',
        component: lazy(() => import('../components/serviceComponents/depositRequests/FundTransfer'))
    },
    {
        url: '/MFS',
        component: lazy(() => import('../components/serviceComponents/depositRequests/MobileFundTransfer'))
    },
    {
        url: '/BFTN',
        component: lazy(() => import('../components/serviceComponents/withdrawalRequests/OnlineWithdrawal'))
    },
    {
        url: '/TIN',
        component: lazy(() => import('../components/serviceComponents/changeRequests/TinInfo'))
    },
    {
        url: '/Contact',
        component: lazy(() => import('../components/serviceComponents/changeRequests/ContactInfo'))
    }
    
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


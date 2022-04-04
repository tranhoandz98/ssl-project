import { lazy } from "react";
import EmptyPage from "../../components/EmptyPage";
import routerMain from "../../constants/routerMain";

const Domain = lazy(() => import('../../pages/domain/Domain'));
const Home = lazy(() => import('../../pages/home/Home'));
const Page404 = lazy(() => import('../../pages/errors/Page404'));
const Page500 = lazy(() => import('../../pages/errors/Page500'));
const Page403 = lazy(() => import('../../pages/errors/Page403'));


const Routes = [
    {
        path: routerMain.HOME,
        exact: true,
        component: Home,
    },
    {
        path: routerMain.DOMAIN,
        exact: true,
        component: Domain,
    },

    {
        path: routerMain.EMPTY,
        exact: true,
        component: EmptyPage,
    },
    //page error
    {
        path: routerMain.PAGE_403,
        exact: true,
        component: Page403,
    },
    {
        path: routerMain.PAGE_500,
        exact: true,
        component: Page500,
    },
    {
        path: '*',
        exact: true,
        component: Page404,
    },
];

export { Routes };

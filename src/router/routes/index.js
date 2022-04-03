import { lazy } from "react";
import EmptyPage from "../../components/EmptyPage";
import routerMain from "../../constants/routerMain";

const Home = lazy(() => import('../../pages/home/Home'));
const Page404 = lazy(() => import('../../pages/errors/Page404'));
const Page500 = lazy(() => import('../../pages/errors/Page500'));
const Page403 = lazy(() => import('../../pages/errors/Page403'));
const Page401 = lazy(() => import('../../pages/errors/Page401'));


const Routes = [
    {
        path: routerMain.HOME,
        exact: true,
        component: Home,
    },
    {
        path: routerMain.EMPTY,
        exact: true,
        component: EmptyPage,
    },
    //page error
    {
        path: routerMain.PAGE_401,
        exact: true,
        component: Page401,
    },
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

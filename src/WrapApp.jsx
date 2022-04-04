import EmptyPage from './components/EmptyPage'
import React, { lazy, Suspense } from 'react'

import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './assets/style/layout.scss';

const LazyApp = lazy(() => import("./App"));

const WrapApp = () => {
    return (
        <Suspense fallback={<EmptyPage />}>
            <LazyApp />
        </Suspense>
    )
}

export default WrapApp

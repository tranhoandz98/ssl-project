import EmptyPage from './components/EmptyPage'
import React, { lazy, Suspense } from 'react'

import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './assets/style/layout.scss';
import AppTranslations from './translations';
import { AppProvider } from './context/AppProvider';

const LazyApp = lazy(() => import("./App"));

const WrapApp = () => {
    return (
        <Suspense fallback={<EmptyPage />}>
            <AppProvider>
                <AppTranslations>
                    <LazyApp />
                </AppTranslations>
            </AppProvider>
        </Suspense>
    )
}

export default WrapApp

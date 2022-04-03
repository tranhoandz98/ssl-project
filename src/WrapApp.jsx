import EmptyPage from './components/EmptyPage'
import React, { lazy, Suspense } from 'react'

const LazyApp = lazy(() => import("./App"));

const WrapApp = () => {
    return (
        <Suspense fallback={<EmptyPage />}>
            <LazyApp />
        </Suspense>
    )
}

export default WrapApp

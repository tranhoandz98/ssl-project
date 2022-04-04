import Menu from './components//Menu/Menu';
import React from 'react'
import AppRouter from './router/AppRouter';
import WrapLayout from './components/layout/layout';

const App = () => {
    return (
        <div className='App bg-[#F3F4F6] '>
            <WrapLayout>
                <AppRouter />
            </WrapLayout>
        </div>
    )
}

export default App

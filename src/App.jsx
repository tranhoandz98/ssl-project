import Menu from './components//Menu/Menu';
import React from 'react'
import AppRouter from './router/AppRouter';

const App = () => {
    return (
        <div className='App'>
            {/* anc */}
            <Menu />
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <AppRouter />
            </div>

        </div>
    )
}

export default App

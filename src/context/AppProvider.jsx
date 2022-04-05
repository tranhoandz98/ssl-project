import { Toast } from 'primereact/toast';
import { AppContext } from './AppContext';
import React, { useRef, useEffect, useState } from 'react';

export const AppProvider = (props) => {
    const { children } = props;
    const myToast = useRef(null);
    const showAlert = (severityValue = "", summaryValue = "", detailValue = "") => {
        myToast.current.show({ severity: severityValue, summary: summaryValue, detail: detailValue });
    };
    const [widthScreen, setWidthScreen] = useState(320);
    const [heightScreen, setHeightScreen] = useState(320);
    const [pageLimit, setPageLimit] = useState(5);

    const isDesktop = () => {
        return window.innerWidth >= 992;
    }
    useEffect(() => {
        const width = window.screen.width;
        const height = window.screen.height;
        if (!isDesktop) {
            setPageLimit(2);
        }
        setWidthScreen(width);
        setHeightScreen(height);
    }, [])
    return (
        <AppContext.Provider
            value={{
                showAlert,
                widthScreen,
                heightScreen,
                pageLimit,
            }}>
            {children}
            <Toast ref={myToast} />
        </AppContext.Provider>
    );
};

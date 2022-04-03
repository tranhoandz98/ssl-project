import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import './page-error.scss';

export const Page500 = () => {
    return (
        <div className="page-error page-error__500">
            <div className="pg-white text-center">
                <div className="page-error__header">500</div>
                <div className="page-error__body">
                    Có lỗi xảy ra!
                    <div className="mt-5">
                        <Link to='/'>
                            <Button
                                className="button-lg "
                                icon="pi pi-home"
                                label="Trang chủ"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page500


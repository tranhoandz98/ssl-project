import React from 'react';
import './page-error.scss';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export const Page401 = () => {

    return (
        <div className="page-error page-error__401">
            <div className="pg-white text-center">
                <div className="page-error__header">401</div>
                <div className="page-error__body">
                    Không tìm thấy tài khoản!
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

export default Page401

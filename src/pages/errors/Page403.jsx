import { Button } from 'primereact/button'
import React from 'react'
import { Link } from 'react-router-dom';
import './page-error.scss'

export const Page403 = () => {
    return (
        <div className="page-error page-error__403">
            <div className="pg-white text-center">
                <div className="page-error__header">403</div>
                <div className="page-error__body">
                    Xin lỗi, bạn không có quyền
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

export default Page403

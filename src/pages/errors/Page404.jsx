import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import './page-error.scss';

export const Page404 = (props) => {
    return (

        <div className="page-error page-error__404">
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <h1 className="text-center ">404</h1>
                                <div className="four_zero_four_bg">
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Không tìm thấy trang
                                    </h3>
                                    <p>Trang đã bị xóa hoặc địa chỉ url không đúng!</p>
                                    <Link to='/'>
                                        <Button
                                            type='button'
                                            icon="pi pi-home"
                                            label="Trang chủ"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page404

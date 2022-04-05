import React, { useState } from 'react'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { Paginator } from 'primereact/paginator';
import { useIntl } from 'react-intl';
import { PAGES } from '../../constants/global';
import routerMain from '../../constants/routerMain';
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';

const Domain = () => {
    const intl = useIntl();

    const data = [
        {
            name: 'CyberSign',
            domain: '10.30.1.15',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },
        {
            name: 'CyberDev',
            domain: '10.30.1.200',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },
        {
            name: 'CyberDev',
            domain: '10.30.1.200',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },
        {
            name: 'CyberDev',
            domain: '10.30.1.200',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },
        {
            name: 'CyberDev',
            domain: '10.30.1.200',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },
        {
            name: 'CyberDev',
            domain: '10.30.1.200',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },
        {
            name: 'CyberDev',
            domain: '10.30.1.200',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },
        {
            name: 'CyberDev',
            domain: '10.30.1.200',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },

        {
            name: 'CyberDev',
            domain: '10.30.1.200',
            type: 1,
            time_start: '2022-22-02',
            time_end: '2022-22-03',
        },

    ]

    const [selectedDatas, setSelectedDatas] = useState(null);
    const [pagination, setPagination] = useState({
        from: 0,
        to: 0,
        row: 10,
        total: 0,
        page: 1,
    });

    const [dataSearch, setDataSearch] = useState({
        text_search: "",
    });

    const [filters, setFilters] = useState({
        page: 1,
        row: 10,
        text_search: "",
        date: null
    });

    const renderRowIndex = (rowData, column) => {
        return (
            <React.Fragment>
                {column.rowIndex + (pagination.from)}
            </React.Fragment>
        );
    };

    const onPageChange = (event) => {
        setFilters({
            ...filters,
            row: event.rows,
            page: event.page + 1
        });
    };
    const onSearchClick = (e) => {
        e.preventDefault();
        setFilters({
            ...filters,
            ...dataSearch,
            page: 1
        });
    };
    // tìm kiếm
    const onChangeDataSearch = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDataSearch({ ...dataSearch, [name]: value });
    };
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {/* <i className="pi pi-eye p-mr-2 icon-medium pointer text-primary"
                    title="Xem"
                    ></i> */}
                <div className="flex">
                    <EyeIcon className="w-5 h-5 text-blue-500 mr-2 cursor-pointer" />
                    <PencilIcon className="w-5 h-5 text-green-500 mr-2 cursor-pointer" />
                    <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" />
                </div>

            </React.Fragment>
        );
    };
    const dataBread = [
        {
            title: 'Home',
            to: routerMain.HOME
        },
        {
            title: 'Domain',
            to: routerMain.DOMAIN
        },
    ]
    return (
        <>
            <BreadCrumbs
                data={dataBread}
            />
            <div className="w-full py-6 px-6 rounded-md bg-white shadow-md dark:bg-gray-800">
                <h1 className="text-lg font-medium mb-3">
                    Domain
                </h1>
                <DataTable
                    showGridlines
                    responsiveLayout="scroll"
                    selectionMode="checkbox"
                    rowHover
                    value={data}
                    selection={selectedDatas}
                    // loading={loading}
                    className=" table-word-break"
                    emptyMessage="Không có bản ghi"
                    onSelectionChange={(e) => setSelectedDatas(e.value)}>
                    <Column selectionMode="multiple" className="stt-table" bodyClassName='p-text-center' />

                    <Column body={renderRowIndex} header="#"
                        className="stt-table" bodyClassName='p-text-center' />

                    <Column field="name" header="Name" sortable
                        className="min-wr--10 wr--10"
                    />
                    <Column field="domain" header="Domain" sortable
                        className="min-wr--12 wr--12 "
                    />
                    <Column field="type" header="Type" sortable
                        className="min-wr--9 wr--9 min-wr-xl-10 wr-xl-10"
                    />
                    <Column field="time_start" header="Thời hạn" sortable
                        className="min-wr--9 wr--9 min-wr-xl-10 wr-xl-10"
                    />
                    <Column header="Action" body={actionBodyTemplate}
                        className="header-center min-wr--12 wr--12"
                        bodyClassName='p-text-center'
                    />
                </DataTable>
                <div className="flex flex-wrap">
                    <div className="text-normal mt-2">
                        <span>{intl.formatMessage({ id: "SHOW_FROM" })} <b>{pagination.from}</b> {intl.formatMessage({ id: "TO" })} <b>{pagination.to}</b> / {intl.formatMessage({ id: "SUM" })} <b>{pagination.total}</b> {intl.formatMessage({ id: "RECORD" })}</span>
                    </div>

                    <div className="ml-auto mt-2">
                        <Paginator first={pagination.from - 1} rows={+(pagination.row)} totalRecords={pagination.total} rowsPerPageOptions={PAGES}
                            onPageChange={(event) => onPageChange(event)}
                            template=" RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                        // pageLinkSize={pageLimit}
                        ></Paginator>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Domain

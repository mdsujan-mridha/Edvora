import React from 'react';
import UseOrder from '../customHooks/UseOrder';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const Orders = () => {
    const[orders ,setOrders] = UseOrder();
    console.log(orders);
    const columns= [
        {dataField:'order_id',text:'user_id'},
        {dataField:'product_id',text:'Product ID',sort:true },
        {dataField:'quantity',text:'Quantity',sort:true },
        {dataField:'user_id',text:'User ID',sort:true },
        
    ]
    const pagination = paginationFactory({
        page:1,
        sizePerPage:5,
        lastPageText:">>",
        firstPageText:"<<",
        nextPageText:">",
        prePageText:"<",
        showTotal:true,
        alwaysShowAllBtns:true,
        onPageChange:function(page,sizePerPage){
            console.log('page',page);
            console.log('sizePerPage',sizePerPage);
        },
        onSizePerPageChange:function(page,sizePerPage){
            console.log('page',page);
            console.log('sizePerPage',sizePerPage);
        }

    });
    return (
        <div className='container mt-5' >
            <h1 className='text-center' style={{paddingBottom:"10px"}}> All Orders </h1>
            <BootstrapTable
            filter={filterFactory()} 
            bootstrap4 
            keyField='user_id' 
            columns={columns} 
            data={orders}
            pagination={pagination}
            
            />
        </div>
    );
};

export default Orders;
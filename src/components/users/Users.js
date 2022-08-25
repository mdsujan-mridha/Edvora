import React from 'react';
import UseUser from '../customHooks/UseUser';
import Spinner from 'react-bootstrap/Spinner';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const Users = () => {
    const [users, setUsers] = UseUser();
    // console.log(users);
   const columns= [
        {dataField:'user_id',text:'user_id'},
        {filter:textFilter(), dataField:'name',text:'Name',sort:true },
        
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
            <h1 className='text-center' style={{paddingBottom:"10px"}}> All Users </h1>
            <BootstrapTable
            filter={filterFactory()} 
            bootstrap4 
            keyField='user_id' 
            columns={columns} 
            data={users}
            pagination={pagination}
            
            />
        </div>
    );
};

export default Users;
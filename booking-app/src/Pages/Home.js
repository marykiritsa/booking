import React from "react";

import SearchBar from '../Components/SearchBar';
import BookTable from '../Components/BookTable';
import PaginationBar from '../Components/PaginationBar';

const Home = () => {
    return(
        <div align="center">
            <SearchBar />
            <BookTable />
            <PaginationBar />
        </div>
    )
}

export default Home;
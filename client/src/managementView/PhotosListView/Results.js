/* eslint-disable max-len */
import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  InputAdornment,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
// import getInitials from 'src/utils/getInitials';
import { useStateValue } from "src/StateProvider";
import Body from "./Body";

function applyFilters(photos, query) {
  return photos.filter((job) => {
    let matches = true;

    if (query && !job.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false;
    }

    return matches;
  });
}

function applyPagination(customers, page, limit) {
  return customers.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {},
  queryField: {
    width: 500,
  },
}));

function Results() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");
  const [{ photos }] = useStateValue();

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };
  const filteredPhotos = applyFilters(photos, query);
  const paginatedPhotos = applyPagination(filteredPhotos, page, limit);

  return (
    <Card className={classes.root}>
      <Box p={2} minHeight={56} display="flex" alignItems="center">
        <TextField
          className={classes.queryField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon fontSize="small" color="action">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          onChange={handleQueryChange}
          placeholder="Search by Name"
          value={query}
        />
        <Box flexGrow={1} />
      </Box>
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell>Photo</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Dimensions</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedPhotos.map((photo, i) => {
                return <Body photo={photo} key={i} />;
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={filteredPhotos.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}

export default Results;

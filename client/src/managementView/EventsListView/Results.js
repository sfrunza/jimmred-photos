/* eslint-disable max-len */
import React, { useState } from "react";
import moment from "moment";
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
  Typography,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";

function applyFilters(events, query) {
  return events.filter((event) => {
    let matches = true;

    if (query && !event.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false;
    }

    return matches;
  });
}

function applyPagination(events, page, limit) {
  return events.slice(page * limit, page * limit + limit);
}

const useStyles = makeStyles((theme) => ({
  root: {},
  queryField: {
    width: 500,
  },
}));

function Results({ events }) {
  const classes = useStyles();
  const today = moment(new Date()).format("MM/DD/YYYY");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

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

  const filteredJobs = applyFilters(events, query);
  const paginatedJobs = applyPagination(filteredJobs, page, limit);

  return (
    <Card className={classes.root}>
      <Box p={2}>
        <Box display="flex" alignItems="center">
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
        </Box>
      </Box>
      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Type of Service</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedJobs.map((job) => {
                return (
                  <TableRow hover key={job.id}>
                    <TableCell>
                      <Typography variant="body1">#{job.id}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <div>
                          <Typography variant="h5">{job.name}</Typography>
                          <Typography variant="body2">{job.email}</Typography>
                        </div>
                      </Box>
                    </TableCell>
                    {today >
                    moment(job.date, "dddd MMM Do, YYYY").format(
                      "MM/DD/YYYY"
                    ) ? (
                      <TableCell className={classes.pastDate}>
                        {job.date}
                      </TableCell>
                    ) : (
                      <TableCell>{job.date}</TableCell>
                    )}
                    <TableCell>
                      {moment(job.time, "hh:mm:ss").format("hh:mm a")}
                    </TableCell>
                    <TableCell>{job.service}</TableCell>
                    <TableCell>{job.subject}</TableCell>
                    <TableCell>{job.message}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredJobs.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

export default Results;

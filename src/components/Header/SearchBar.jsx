import React from 'react'
import useStyles from "./style"
import SearchIcon from '@material-ui/icons/Search';
import { Button, InputBase } from '@material-ui/core'

function SearchBar() {

    const classes = useStyles();

    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search For Gifts"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <Button className={classes.searchButton}><SearchIcon style={{ fontSize: 30 }} /></Button>
            </div>
        </div>
    )
}

export default SearchBar

import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers';

const styles = {
    grid: {
        width: '100%',
    },
};

class DaterangePicker extends React.Component {


    handleStartDateChange = date => {

        this.props.onChange('startDate', date);


    };
    handleEndDateChange = date => {

        this.props.onChange('endDate', date);

    };

    render() {
        const { classes } = this.props;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container className={classes.grid} justify="space-around">
                    <InlineDatePicker
                        keyboard
                        clearable
                        variant="outlined"
                        disableFuture = {true}
                        autoOk = {true}
                        margin="normal"
                        label="Start Date"
                        maxDate = {this.props.endDate}
                        value={this.props.startDate}
                        onChange={this.handleStartDateChange}
                        format={"dd/MM/yyyy"}
                    />
                    <InlineDatePicker
                        keyboard
                        clearable
                        variant="outlined"
                        disableFuture = {true}
                        autoOk = {true}
                        margin="normal"
                        label="End Date"
                        minDate = {this.props.startDate}
                        value={this.props.endDate}
                        onChange={this.handleEndDateChange}
                        format={"dd/MM/yyyy"}
                    />


                </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}

DaterangePicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DaterangePicker);
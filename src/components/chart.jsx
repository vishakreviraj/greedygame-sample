import React from 'react';
import { Line } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }
    state = {
        anchorEl: null,
        selectedIndex: 0,
        cd : [],
        s : new Date(),
        e : new Date(),

        data : (canvas) => {
            var ctx = canvas.getContext("2d");
        
        
            return {
                datasets: [{
                    label: "eCPM",
                    pointBorderColor: "#000",
                    pointBackgroundColor: "#000",
                    pointBorderWidth: 1,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 1,
                    fill: true,
                    borderWidth: 2,
                    data : this.state.cd
                }]
            }
        } ,
        options : {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                    display: 1,
                    ticks: {
                        display: true,
                        beginAtZero: true

                    },
        
                }],
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'day'
                    },
                    // time : {
                    //     min : this.props.startDate,
                    //     max : this.props.endDate,
                    // },
                    distribution: 'linear',
                    bounds: 'data',


                    display: 1,
                    ticks: {

                        display: true,
                        source: 'auto'
        
                    },

        
                }]

            },
            layout: {
                padding: { left: 0, right: 8, top: 16, bottom: 8 }
            }
        }

    };



    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index,data,games) => {
        this.setState({ selectedIndex: index, anchorEl: null });

        let a = data.filter(obj => obj.game === games[index])
        let md = []
        let i = 0
        a.map(obj => {

            md[i] = { x: new Date(obj.timestamp  + " 00:00:00.0") , y: obj.ecpm }
            i = i + 1
        })
        this.setState({
            cd: md,
        })

    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl,selectedIndex } = this.state;
        const { games} = this.props;

        return (
            <Card  >
                <CardHeader
                    title="eCPM Trendline"
                    action={
                        <div>
                                                        <Button
                                                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                                                        aria-haspopup="true"
                                                        onClick={this.handleClick}
                                                    >
                                                        {games[this.state.selectedIndex] 
                            </Button> }


                            <Menu
                                id="lock-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                            >
                                {games.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        disabled={index === 0}
                                        selected={index === selectedIndex}
                                        onClick={event => this.handleMenuItemClick(event, index,this.props.chartData, this.props.games)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    }
                />
                <Line  data={this.state.data} options={this.state.options} max-height={300}  />
            </Card>
        );
    }
}

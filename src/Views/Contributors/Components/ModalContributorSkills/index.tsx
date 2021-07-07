import React, { Fragment } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { ListItem, ListItemText, Avatar, ListItemAvatar } from '@material-ui/core';

import { Employees } from "../../../../types/Employees"

export default function ContributorSkillsModal({ contributor }: { contributor: Employees }): JSX.Element {
    const options = {
        chart: {
            height: "200px",
            width: 500
        },
        yAxis: {
            title: {
                text: "JAVA"
            }
        },
        title: {
            text: ''
        },
        series: [{
            data: [2, 2, 3, 3, 5, 5, 7, 7, 7, 10]
        }],
    }

    return (
        <Fragment>
            <ListItem>
                <ListItemAvatar>
                    {/* <Avatar alt={contributor.name} src={contributor.photo} /> */}
                    <Avatar alt={contributor.name} src="" />
                </ListItemAvatar>
                <ListItemText primary={contributor.name} secondary={
                    <div>
                        <div>
                            <span>{contributor.professionalEmailRaro}</span>
                        </div>
                        <div>
                            <span>Tel: {contributor.cellPhone}</span>
                        </div>
                    </div>
                } />
            </ListItem>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <HighchartsReact highcharts={Highcharts} options={options} />
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Fragment>
    )
}
import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import { concat, isEqual, remove } from 'lodash';
import HighchartsReact from 'highcharts-react-official'

class Chart extends React.Component{

  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  	if(!isEqual(this.props.xValue,nextProps.xValue)){
      this.refreshTooltip(nextProps.xValue, nextProps.preXvalue);
    }
	}

  refreshTooltip(xValue, preXvalue) {
    const highcharts = this.high.chart;
    const series = highcharts.series;
    var p = [];
    series.forEach(function(v){
      p.push(v.points[xValue]);
      if(preXvalue > -1)
        v.data[preXvalue].setState();
      v.data[xValue].setState('hover');
    });
    highcharts.tooltip.refresh(p);
    var newValue = xValue;
    highcharts.xAxis[0].options.plotLines[0].value = newValue;
    highcharts.xAxis[0].update();
  }

  generateSeries(list) {
    const highcharts = this.high.chart;
    const series = highcharts.series;
    list.forEach(function(v){
      series[0].addPoint([v.id,v.auc]);
      series[1].addPoint([v.id,v.precision]);
      series[2].addPoint([v.id,v.recall]);
    })
  }

  componentDidMount() {
    this.generateSeries(this.props.list);
    this.refreshTooltip(this.props.xValue, this.props.preXvalue);
  }

  state = {
    options : {
      chart : {
        type: this.props.title,
      },

      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },

      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },

      xAxis: {
        tickInterval: 1,
        plotLines: [{
          color: 'grey',
          width: 1,
          value: 0,
        }]
      },
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver: (e) => {
                this.props.onChange(e.target.x);
              }
            }
          },
          label: {
            connectorAllowed: true
          },
          pointStart: 0
        }
      },

      series: [{
        name: 'auc',
        data: []
      }, {
        name: 'precision',
        data: []
      }, {
        name: 'recall',
        data: []
      }],


      tooltip: {
        shared: true,
        backgroundColor: {
          linearGradient: [0, 0, 0, 60],
          stops: [
            [0, '#FFFFFF'],
            [1, '#E0E0E0']
          ]
        },
        borderWidth: 1,
        borderColor: '#AAA'
      },

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    }
  }

  onChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render(){
    const options = this.props.list.map((listEntry) =>
      <option value={listEntry.id}>{listEntry.id}</option>);
    return (
      <React.Fragment>
        <HighchartsReact highcharts={Highcharts} ref={(high) => this.high = high} options={this.state.options} />
        <select onChange={this.onChange}>
          {options}
        </select>
      </React.Fragment>
    )
  }
}
export default Chart;

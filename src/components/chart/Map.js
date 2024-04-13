import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highmaps';
import users from '../../constants/users';


const dataSets = users.map((user) => {
    return {
        name: user.address.city,
        lat: user.address.coordinates.lat,
        lon: user.address.coordinates.lng
    }
})
const MapChart = () => {
    useEffect(() => {
        const fetchTopology = async () => {
            const topology = await fetch(
                'https://code.highcharts.com/mapdata/custom/world.topo.json'
            ).then(response => response.json());

            // Initialize the chart
            Highcharts.mapChart('container', {

                chart: {
                    map: topology,
                    renderTo: 'container'
                },

                title: {
                    text: 'Highmaps basic lat/lon demo'
                },

                accessibility: {
                    description: 'Map where city locations have been defined using latitude/longitude.'
                },

                mapNavigation: {
                    enabled: true
                },

                tooltip: {
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
                },

                series: [{
                    // Use the gb-all map with no data as a basemap
                    name: 'Great Britain',
                    borderColor: '#A0A0A0',
                    nullColor: 'rgba(200, 200, 200, 0.3)',
                    showInLegend: false
                }, {
                    name: 'Separators',
                    type: 'mapline',
                    nullColor: '#707070',
                    showInLegend: false,
                    enableMouseTracking: false,
                    accessibility: {
                        enabled: false
                    }
                }, {
                    // Specify points using lat/lon
                    type: 'mappoint',
                    name: 'Cities',
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{xDescription}. Lat: {point.lat:.2f}, lon: {point.lon:.2f}.'
                        }
                    },
                    color: Highcharts.getOptions().colors[1],
                    data: dataSets
                }]
            });
        };

        fetchTopology();

        // Clean-up function
        return () => {
            // Destroy the chart instance
            if (Highcharts.charts[0]) {
                Highcharts.charts[0].destroy();
            }
        };
    }, []);

    return <div id="container" />;
};

export default MapChart;

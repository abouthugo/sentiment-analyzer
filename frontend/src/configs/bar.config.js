export const keys = ['neutral', 'negative', 'positive']
export const indexBy = "week"
export const margin = { top: 50, right: 130, bottom: 50, left: 60 }
export const padding = 0.3
export const colors = ({id, data}) => data[`${id}Color`]
export const borderWidth = 1
export const fill = [
    {
        match: {
            id: 'negative'
        },
        id: 'dots'
    },
    {
        match: {
            id: 'positive'
        },
        id: 'lines'
    }
]
export const borderColor = { from: 'color', modifiers: [['darker', 1.6]] }
export const axisTop = null
export const axisRight = null
export const axisBottom = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'week',
    legendPosition: 'middle',
    legendOffset: 32
}

export const axisLeft = {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Count',
    legendPosition: 'middle',
    legendOffset: -40
}

export const labelSkipWidth = 12
export const labelSkipHeight = 12
export const labelTextColor = { from: 'color', modifiers: [['darker', 1.6]] }
export const legends = [
    {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
            {
                on: 'hover',
                style: {
                    itemOpacity: 1
                }
            }
        ]
    }
]
export const animate = true
export const motionStiffness = 90
export const motionDamping = 15
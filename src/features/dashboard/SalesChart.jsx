import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledSalesChart = styled(DashboardBox)`
    grid-column: 1 / -1;

    /* Hack to change grid line colors */
    & .recharts-cartesian-grid-horizontal line,
    & .recharts-cartesian-grid-vertical line {
        stroke: var(--color-grey-300);
    }
`;

const formatTick = (number) => {
    if (number >= 1000000) {
        return (number / 1000000).toString() + "Jt";
    } else if (number >= 1000) {
        return (number / 1000).toString() + "K";
    } else {
        return number.toString();
    }
};

const fakeData = [
    { label: "Jan 09", totalSales: 4800000, extrasSales: 200000 },
    { label: "Jan 10", totalSales: 5800000, extrasSales: 1000000 },
    { label: "Jan 11", totalSales: 5500000, extrasSales: 1500000 },
    { label: "Jan 12", totalSales: 6000000, extrasSales: 500000 },
    { label: "Jan 13", totalSales: 7000000, extrasSales: 1500000 },
    { label: "Jan 14", totalSales: 8000000, extrasSales: 1500000 },
    { label: "Jan 15", totalSales: 7000000, extrasSales: 2000000 },
    { label: "Jan 16", totalSales: 6500000, extrasSales: 2000000 },
    { label: "Jan 17", totalSales: 6000000, extrasSales: 3000000 },
    { label: "Jan 18", totalSales: 5500000, extrasSales: 1000000 },
    { label: "Jan 19", totalSales: 7000000, extrasSales: 1000000 },
    { label: "Jan 20", totalSales: 8000000, extrasSales: 2000000 },
    { label: "Jan 21", totalSales: 7000000, extrasSales: 1000000 },
    { label: "Jan 22", totalSales: 8100000, extrasSales: 500000 },
    { label: "Jan 23", totalSales: 9500000, extrasSales: 2500000 },
    { label: "Jan 24", totalSales: 9700000, extrasSales: 1000000 },
    { label: "Jan 25", totalSales: 9000000, extrasSales: 2000000 },
    { label: "Jan 26", totalSales: 9500000, extrasSales: 3000000 },
    { label: "Jan 27", totalSales: 8500000, extrasSales: 2000000 },
    { label: "Jan 28", totalSales: 9000000, extrasSales: 1000000 },
    { label: "Jan 29", totalSales: 8000000, extrasSales: 3000000 },
    { label: "Jan 30", totalSales: 9500000, extrasSales: 2000000 },
    { label: "Jan 31", totalSales: 11000000, extrasSales: 3000000 },
    { label: "Feb 01", totalSales: 12000000, extrasSales: 4000000 },
    { label: "Feb 02", totalSales: 12500000, extrasSales: 3000000 },
    { label: "Feb 03", totalSales: 14000000, extrasSales: 4500000 },
    { label: "Feb 04", totalSales: 15000000, extrasSales: 5000000 },
    { label: "Feb 05", totalSales: 14000000, extrasSales: 6000000 },
    { label: "Feb 06", totalSales: 14500000, extrasSales: 4000000 },
];

function SalesChart() {
    const { isDarkMode } = useDarkMode();
    const colors = isDarkMode
        ? {
              totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
              extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
              text: "#e5e7eb",
              background: "#18212f",
          }
        : {
              totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
              extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
              text: "#374151",
              background: "#fff",
          };

    return (
        <StyledSalesChart>
            <Heading as="h2">Sales</Heading>
            <ResponsiveContainer height={300} width="100%">
                <AreaChart data={fakeData}>
                    <XAxis
                        dataKey="label"
                        tick={{ fill: colors.text }}
                        tickLine={{ fill: colors.text }}
                    />
                    <YAxis
                        unit=" IDR"
                        tickFormatter={formatTick}
                        tick={{ fill: colors.text }}
                        tickLine={{ fill: colors.text }}
                    />
                    <CartesianGrid
                        strokeDasharray="4"
                        contentStyle={{ backgroundColor: colors.background }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: colors.background }}
                    />
                    <Area
                        dataKey="totalSales"
                        type="monotone"
                        stroke={colors.totalSales.stroke}
                        fill={colors.totalSales.fill}
                        strokeWidth={2}
                        name="Total Sales"
                        unit="IDR"
                    />
                    <Area
                        dataKey="extrasSales"
                        type="monotone"
                        stroke={colors.extrasSales.stroke}
                        fill={colors.extrasSales.fill}
                        strokeWidth={2}
                        name="Extras Sales"
                        unit="IDR"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </StyledSalesChart>
    );
}

export default SalesChart;

import React, { useMemo, useState } from "react";

import { Box, Button, styled } from "@mui/material";
import { fontSize } from "@mui/system";
import DateCard from "./DateCard";
import { IoIosArrowDown } from "react-icons/io";
import MonthSelectorDialog from "./MonthSelectorDialog";

const ContainerBox = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
});

const DatesRootBox = styled(Box)({
    width: "100%",
    display: "flex",
    columnGap: "8px",
    overflowX: "scroll",
    paddingBottom: "10px",
});

const MonthYearButton = styled(Button)(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    paddingInline: "0",
}));

const getDaysInMonth = (month, year) => {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
};

const DatePicker = ({
    earliestMonth = 0,
    latestMonth = 12,
    value,
    onChange,
}) => {
    const [monthModalOpen, setMonthModalOpen] = useState(false);
    const [day, month, date, year] = value.toDateString().split(" ");

    const changeHandler = (newDate) => onChange(newDate);
    const closeHandler = (newDate) => {
        setMonthModalOpen(false);
        onChange(newDate);
    };

    const daysInMonth = useMemo(
        () => getDaysInMonth(value.getMonth(), value.getFullYear()),
        [month, year]
    );

    return (
        <ContainerBox>
            <MonthYearButton
                endIcon={<IoIosArrowDown />}
                onClick={() => setMonthModalOpen(true)}
            >{`${month}, ${year}`}</MonthYearButton>
            <MonthSelectorDialog
                onClose={closeHandler}
                selectedValue={value}
                open={monthModalOpen}
                earliestMonth={earliestMonth}
                latestMonth={latestMonth}
            />
            <DatesRootBox>
                {daysInMonth.map((dayOfMonth) => {
                    const [dayName, monthName, dateValue, year] = dayOfMonth
                        .toDateString()
                        .split(" ");
                    return (
                        <DateCard
                            key={dayOfMonth.toDateString()}
                            day={dayName}
                            date={dateValue}
                            active={dateValue === date}
                            onClick={() => changeHandler(dayOfMonth)}
                        />
                    );
                })}
            </DatesRootBox>
        </ContainerBox>
    );
};

export default DatePicker;

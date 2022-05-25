import React from "react";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

const getMonthList = (earliestMonth, latestMonth) => {
    const currentMonth = new Date();
    let monthList = [];
    for (
        let monthIndex = -earliestMonth;
        monthIndex <= latestMonth;
        monthIndex++
    ) {
        monthList.push(
            new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth() + monthIndex,
                1
            )
        );
    }
    return monthList;
};

const MonthSelectorDialog = ({
    onClose,
    selectedValue,
    open,
    earliestMonth,
    latestMonth,
}) => {
    const closeHandler = () => onClose(selectedValue);

    const monthChangeHandler = (newValue) => {
        if (newValue.getMonth() === selectedValue.getMonth())
            onClose(selectedValue);
        else onClose(newValue);
    };

    const monthList = getMonthList(earliestMonth, latestMonth);

    return (
        <Dialog onClose={closeHandler} open={open} scroll="paper">
            <DialogTitle>Select Month, Year</DialogTitle>
            <DialogContent dividers>
                <List disablePadding>
                    {monthList.map((month) => {
                        const [day, monthName, dateValue, yearValue] = month
                            .toDateString()
                            .split(" ");
                        return (
                            <ListItem
                                button
                                onClick={() => monthChangeHandler(month)}
                                key={month.toDateString()}
                            >
                                <ListItemText
                                    primary={`${monthName}, ${yearValue}`}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </DialogContent>
        </Dialog>
    );
};

export default MonthSelectorDialog;

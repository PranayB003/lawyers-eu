import React, { useState } from "react";

import { Box, Typography, Stack, Button, Chip } from "@mui/material";
import classes from "./SelectServices.module.css";
import { FiEdit } from "react-icons/fi";
import SearchBar from "../../../components/SearchBar/SearchBar";

const legalServices = [
    {
        categoryName: "Website Agreements and policy",
        services: [
            "Website Maintenance Agreement",
            "Website Development Agreement",
            "E-Commerce Agreement",
            "Cancellation Policy",
            "Refund Policy",
        ],
    },
    {
        categoryName: "Property law",
        services: [
            "Transfer of Property",
            "Property Registration / Succession",
            "Succession Certificate",
            "Ownership Claims",
            "Property Investigation and Claims",
        ],
    },
];

const getServicesObject = () => {
    let servicesObject = {};

    legalServices.forEach((category) => {
        let services = {};
        category.services.forEach((serviceName) => {
            services = {
                ...services,
                [serviceName]: false,
            };
        });

        servicesObject = {
            ...servicesObject,
            [category.categoryName]: services,
        };
    });

    return servicesObject;
};

const SelectServices = () => {
    const [city, setCity] = useState("Wales");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedServices, setSelectedServices] = useState(getServicesObject);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(0);

    const searchChangeHandler = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    };

    const chipClickHandler = (categoryName, serviceName) => {
        setNextBtnEnabled((prevState) => {
            if (selectedServices[categoryName][serviceName])
                return prevState - 1;
            else return prevState + 1;
        });

        setSelectedServices((prevState) => {
            return {
                ...prevState,
                [categoryName]: {
                    ...prevState[categoryName],
                    [serviceName]: !prevState[categoryName][serviceName],
                },
            };
        });
    };

    return (
        <Box className={classes.wrapperBox}>
            {/* Insert TitleBar */}
            <Box className={classes.subHeadingBox}>
                <Typography variant="caption">Select Service(s)</Typography>
                <Stack>
                    <Typography
                        variant="subtitle2"
                        color="text.disabled"
                        textAlign="center"
                    >
                        Select City
                    </Typography>
                    <Button endIcon={<FiEdit />}>{city}</Button>
                </Stack>
            </Box>
            <SearchBar value={searchTerm} onChange={searchChangeHandler} />
            <Box className={classes.servicesListBox}>
                {legalServices.map((category) => (
                    <React.Fragment key={`${category.categoryName}Root`}>
                        <Typography
                            textTransform="uppercase"
                            variant="caption"
                            key={category.categoryName}
                        >
                            {category.categoryName}
                        </Typography>
                        <Stack
                            spacing={1}
                            className={classes.chipStack}
                            key={`${category.categoryName}Stack`}
                        >
                            {category.services.map((service) => (
                                <Chip
                                    className={classes.chip}
                                    key={service}
                                    label={service}
                                    variant="outlined"
                                    color={
                                        selectedServices[category.categoryName][
                                            service
                                        ]
                                            ? "primary"
                                            : "disabled"
                                    }
                                    onClick={() =>
                                        chipClickHandler(
                                            category.categoryName,
                                            service
                                        )
                                    }
                                />
                            ))}
                        </Stack>
                    </React.Fragment>
                ))}
            </Box>
            <Button
                variant="contained"
                fullWidth
                className={classes.nextBtn}
                disabled={nextBtnEnabled > 0 ? false : true}
            >
                Next
            </Button>
        </Box>
    );
};

export default SelectServices;

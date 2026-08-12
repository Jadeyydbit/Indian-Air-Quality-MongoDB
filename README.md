# Indian Air Quality Monitoring & Pollution Analysis using MongoDB

## Project Overview

This project analyzes air-quality data from Indian cities using MongoDB.

The objective is to identify pollution patterns across cities, analyze AQI categories, compare pollutant levels, examine yearly AQI trends, and identify cities with a high number of severe air-quality observations.

The project also includes a data-quality step because the original `AQI_Bucket` field in the dataset contained inconsistencies with the numerical AQI values.

---

## Problem Statement

Air pollution is a major environmental concern in India. Large volumes of air-quality observations can be difficult to analyze without an appropriate database and querying system.

This project uses MongoDB to store and analyze city-level air-quality observations and answer questions such as:

- Which cities have the highest average AQI?
- Which cities have the highest average PM2.5?
- How are AQI observations distributed across different categories?
- How does average AQI change over the years?
- Which cities have the largest number of severe AQI observations?
- How do major pollutant levels compare across cities?

---

## Dataset

**Source:** Kaggle — Air Quality Data in India (2015–2024)

The project uses the `city_day.csv` dataset.

The dataset contains city-level daily observations including:

- City
- Datetime
- PM2.5
- PM10
- NO
- NO2
- NOx
- NH3
- CO
- SO2
- O3
- Benzene
- Toluene
- Xylene
- AQI
- AQI_Bucket

After data preparation, an additional field called `AQI_Category` was created.

---

## Data Quality Check

During initial inspection, inconsistencies were identified in the original `AQI_Bucket` field.

For example, some records contained numerical AQI values that did not correspond to their supplied AQI bucket.

Therefore, the original `AQI_Bucket` field was retained for reference, but a new `AQI_Category` field was created from the numerical AQI value.

### AQI Categories Used

| AQI Range | Category |
|---|---|
| 0–50 | Good |
| 51–100 | Satisfactory |
| 101–200 | Moderate |
| 201–300 | Poor |
| 301–400 | Very Poor |
| 401–500 | Severe |

The corrected `AQI_Category` is used for the project analysis.

---

## MongoDB Database Structure
air_quality_db
│
└── city_air_quality

Total imported documents:

18,265

## MongoDB Operations Demonstrated

The project demonstrates the following MongoDB concepts:

Database and collection creation
CSV data import
Document inspection
countDocuments()
find()
Projection
Sorting
Limiting results
Aggregation pipelines
$match
$group
$avg
$sum
$sort
$addFields
$substr
$toInt
Nested grouping keys  

## Analysis Performed
1. Average AQI by City
City	Average AQI
Mumbai	253.32
Delhi	251.50
Kolkata	250.64
Chennai	250.34
Bangalore	249.77

Mumbai had the highest average AQI among the cities in the analyzed dataset.

2. AQI Category Distribution
AQI Category	Records
Severe	3,710
Poor	3,645
Very Poor	3,641
Moderate	3,635
Satisfactory	1,822
Good	1,812

The majority of observations fall within the higher AQI categories.

3. Average PM2.5 by City
City	Average PM2.5
Delhi	252.91
Chennai	252.52
Kolkata	250.46
Mumbai	248.56
Bangalore	248.55

Delhi had the highest average PM2.5 among the analyzed cities.

4. Average AQI by Year
Year	Average AQI
2015	247.42
2016	250.11
2017	250.89
2018	246.31
2019	255.43
2020	247.31
2021	252.51
2022	250.47
2023	257.01
2024	253.68

The yearly analysis shows variation in average AQI across the period rather than a consistently improving or worsening pattern.

5. Severe AQI Observations by City
City	Severe Observations
Chennai	766
Mumbai	752
Kolkata	740
Bangalore	738
Delhi	714

Chennai had the highest number of observations classified as Severe using the corrected AQI_Category.

6. Multi-Pollutant Comparison

Average levels of major pollutants were calculated for each city, including:

PM2.5
PM10
NO2
SO2
CO
O3

This provides a broader view of the pollution profile of each city rather than relying only on AQI.

## Key Findings
Mumbai recorded the highest average AQI among the analyzed cities.
Delhi recorded the highest average PM2.5.
Chennai recorded the highest number of Severe AQI observations.
Severe, Poor, Very Poor, and Moderate categories account for the majority of observations.
AQI varied across years, with 2023 showing the highest average AQI in the analyzed period.
The original AQI_Bucket field contained inconsistencies, so a validated AQI_Category was created from numerical AQI values.
Project Structure
Indian-Air-Quality-MongoDB/
│
├── data/
│   └── city_day.csv
│
├── queries/
│   └── air_quality_analysis.js
│
├── documentation/
│   └── project_documentation.pdf
│
└── README.md

## Technologies Used
MongoDB
MongoDB Compass
MongoDB Shell
CSV
Python / Pandas for data preparation where required
Project Workflow
Kaggle Dataset
      ↓
Data Inspection
      ↓
Data Quality Check
      ↓
Create Corrected AQI Category
      ↓
MongoDB Import
      ↓
Aggregation Queries
      ↓
AQI & Pollution Analysis
      ↓
Key Findings
      ↓
Documentation

## Conclusion

This project demonstrates how MongoDB can be used to store, query, and analyze environmental data.

The analysis covered city-level AQI comparisons, pollutant levels, AQI category distributions, yearly trends, and severe pollution observations.

An important part of the project was identifying inconsistencies in the original AQI category field and creating a corrected AQI_Category from the numerical AQI values.

The project demonstrates practical MongoDB skills while applying database querying to a real-world environmental dataset.

air_quality_db
│
└── city_air_quality

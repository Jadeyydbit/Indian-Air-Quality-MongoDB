// ============================================================
// Indian Air Quality Monitoring & Pollution Analysis
// MongoDB Analysis Queries
// ============================================================

// Select database
use air_quality_db;


// ------------------------------------------------------------
// 1. Check total number of documents
// ------------------------------------------------------------

db.city_air_quality.countDocuments();


// ------------------------------------------------------------
// 2. Average AQI by City
// ------------------------------------------------------------

db.city_air_quality.aggregate([
  {
    $group: {
      _id: "$City",
      Average_AQI: { $avg: "$AQI" }
    }
  },
  {
    $sort: {
      Average_AQI: -1
    }
  }
]);


// ------------------------------------------------------------
// 3. AQI Category Distribution
// ------------------------------------------------------------

db.city_air_quality.aggregate([
  {
    $group: {
      _id: "$AQI_Category",
      Total_Records: { $sum: 1 }
    }
  },
  {
    $sort: {
      Total_Records: -1
    }
  }
]);


// ------------------------------------------------------------
// 4. Average PM2.5 by City
// ------------------------------------------------------------

db.city_air_quality.aggregate([
  {
    $group: {
      _id: "$City",
      Average_PM2_5: { $avg: "$PM2_5" }
    }
  },
  {
    $sort: {
      Average_PM2_5: -1
    }
  }
]);


// ------------------------------------------------------------
// 5. Top 10 Highest AQI Observations
// ------------------------------------------------------------

db.city_air_quality.find(
  {},
  {
    _id: 0,
    City: 1,
    Datetime: 1,
    AQI: 1,
    AQI_Category: 1
  }
)
.sort({ AQI: -1 })
.limit(10);


// ------------------------------------------------------------
// 6. Average AQI by Year
// ------------------------------------------------------------

db.city_air_quality.aggregate([
  {
    $addFields: {
      Year: {
        $toInt: {
          $substr: ["$Datetime", 6, 4]
        }
      }
    }
  },
  {
    $group: {
      _id: "$Year",
      Average_AQI: { $avg: "$AQI" }
    }
  },
  {
    $sort: {
      _id: 1
    }
  }
]);


// ------------------------------------------------------------
// 7. AQI Category Distribution by City
// ------------------------------------------------------------

db.city_air_quality.aggregate([
  {
    $group: {
      _id: {
        City: "$City",
        AQI_Category: "$AQI_Category"
      },
      Records: { $sum: 1 }
    }
  },
  {
    $sort: {
      "_id.City": 1,
      Records: -1
    }
  }
]);


// ------------------------------------------------------------
// 8. Average Major Pollutants by City
// ------------------------------------------------------------

db.city_air_quality.aggregate([
  {
    $group: {
      _id: "$City",
      Avg_PM2_5: { $avg: "$PM2_5" },
      Avg_PM10: { $avg: "$PM10" },
      Avg_NO2: { $avg: "$NO2" },
      Avg_SO2: { $avg: "$SO2" },
      Avg_CO: { $avg: "$CO" },
      Avg_O3: { $avg: "$O3" }
    }
  }
]);


// ------------------------------------------------------------
// 9. Severe AQI Observations by City
// ------------------------------------------------------------

db.city_air_quality.aggregate([
  {
    $match: {
      AQI_Category: "Severe"
    }
  },
  {
    $group: {
      _id: "$City",
      Severe_Observations: { $sum: 1 }
    }
  },
  {
    $sort: {
      Severe_Observations: -1
    }
  }
]);


// ============================================================
// End of Analysis
// ============================================================

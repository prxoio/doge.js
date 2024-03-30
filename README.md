# Dog Breeds API Documentation

## Overview

This document outlines the available endpoints in the Dog Breeds API, which allows users to retrieve information about various dog breeds, including a list of all breeds and detailed information about a specific breed.

## Base URL

`https://dogejs.vercel.app/api`

## Endpoints

### Get a List of All Dog Breeds

- **URL**: `/breeds`
- **Method**: `GET`
- **Description**: Retrieves a list of all dog breeds.
- **Responses**:
  - **200 OK**
    - **Content-Type**: `application/json`
    - **Body**: An array of strings, each representing a dog breed.
    - **Example**:
      ```json
      [
        "Affenpinscher",
        "Afghan Hound",
        "Airedale Terrier"
      ]
      ```

### Get Details of a Specific Dog Breed

- **URL**: `/dogs`
- **Method**: `GET`
- **Query Parameters**:
  - **id** (required): The ID of the dog breed.
- **Description**: Retrieves detailed information about a specific dog breed.
- **Responses**:
  - **200 OK**
    - **Content-Type**: `application/json`
    - **Body**:
      ```json
      {
        "id": "Akita",
        "description": "Akitas are burly, heavy-boned spitz-type dogs of imposing stature...",
        "temperament": "Courageous, Dignified, Profoundly Loyal",
        "popularity": 47,
        "min_height": 60.96,
        "max_height": 71.12,
        "min_weight": 31.7514659,
        "max_weight": 58.9670081,
        "min_expectancy": 10,
        "max_expectancy": 13,
        "group": "Working Group",
        "grooming_frequency_value": 0.8,
        "grooming_frequency_category": "Daily Brushing",
        "shedding_value": 0.6,
        "shedding_category": "Seasonal",
        "energy_level_value": 0.8,
        "energy_level_category": "Energetic",
        "trainability_value": 1,
        "trainability_category": "Eager to Please",
        "demeanor_value": 0.6,
        "demeanor_category": "Alert/Responsive"
      }
      ```
  - **404 Not Found**
    - **Description**: Item not found.

---
import React, { createContext, useState } from 'react';

export const CityContext = createContext();
function CityContextProvider({ children }) {
    const [city, setCity] = useState("Bangalore");
    const applyCity = (cityName) => {
        setCity(cityName)
    }
    const value = { city, applyCity };
    return (
        <CityContext.Provider value={value}>
            {children}
        </CityContext.Provider>
    )
}
export default CityContextProvider;
import React,
{
    createContext,
    useContext,
    useReducer
}
    from "react";

export const DataLayerContext = createContext(); //prepares the data layer of what is about to come

export const DataLayer = ({ initialState,
    reducer,
    children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
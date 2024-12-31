import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import jsonData from "../jsonData.json"

export interface BookData {
    items: Book[];
  }
  
  export interface VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    language: string;
    categories: string[];
    description: string;
  }

  export interface Book {
    volumeInfo: VolumeInfo; 
    id: number; 
  }

interface DataContextType {
    data: BookData;
    filterdData: BookData;
    loading: boolean;
    error: String | null;
    setData: (data: BookData) => void;
    setFilterdData: (data: BookData) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
  }

  export const DataProvider: React.FC<DataProviderProps> = ({children}) => {
    const [data, setData] = useState<BookData>({ items: [] });
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [filterdData, setFilterdData] = useState<BookData>({ items: [] });

    const fetchDataFromUrl = async () => {
        setLoading(true);
        try {
          const data = jsonData as unknown as BookData; 
          setData(data);
          setLoading(false);
        } catch (error) {
          setError('Failed to load data');
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchDataFromUrl();
      }, []);
    
      const clearFilteredData = () => {
        setFilterdData({ items: [] }); 
      };

  return(
    <DataContext.Provider value={{
        data,
        filterdData,
        loading,
        error,
        setData,
        setFilterdData,
        setLoading,
        setError,
    }}>
    {children}
    </DataContext.Provider>
  );
  };

  export const useDataContext = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
      throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
  };

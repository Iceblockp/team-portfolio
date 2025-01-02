"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
// import { Provider } from "react-redux";
// import { store } from "../../store/store";



const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>

  );
};

export default AppProvider;

"use client";
import queryClient from "@/config/tansack-query";
import { store, persistor } from "@/lib/redux/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NuqsAdapter>{children}</NuqsAdapter>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default Providers;

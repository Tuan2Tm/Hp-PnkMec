"use client";

import { authProvider } from "@/constants/provider";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(authProvider);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(authProvider.loading);
  const [user, setUser] = useState(authProvider.user);

  const router = useRouter();

  useEffect(() => {}, []);

  const handleLogin = () => {};
  const handleLogout = () => {};

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';

import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequiredAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequiredAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRole = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            return userRole?.includes(requiredRole);
        });
    }, [roles, userRole]);

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children;
}

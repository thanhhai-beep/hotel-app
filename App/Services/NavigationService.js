import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

export let navigationRef = React.createRef();
export const drawerRef = React.createRef();

export function setNavRef(ref) {
    navigationRef = ref
}

export function getNavRef() {
    return navigationRef;
}

export function getNavDrawerRef() {
    return drawerRef;
}

export function requestNavigate(otps) {
    (navigationRef.current)?.dispatch(
        CommonActions.navigate(otps?.key, otps?.params),
    );
}

export function requestGoBack() {
    (navigationRef.current)?.dispatch(CommonActions.goBack());
}

export function requestOpenDrawer() {
    (navigationRef.current)?.dispatch(DrawerActions.openDrawer());
}

export function requestCloseDrawer() {
    (navigationRef.current)?.dispatch(DrawerActions.closeDrawer());
}

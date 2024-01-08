import { useSelector } from "react-redux";


export const usePrefered = () => useSelector(state => state.theme.prefered)

export const useTheme = () => useSelector(state => state.theme)

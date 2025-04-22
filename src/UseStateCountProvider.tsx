import { createContext, PropsWithChildren, useState } from "react";

type CountStore = [number, () => void];
export const UseStateCountContext = createContext<CountStore | undefined>(undefined);


type CountProviderProps = PropsWithChildren & {
    initialCount: number;
}



export default function UseStateCountProvider({children, initialCount}: CountProviderProps){
    const [count,setCount] = useState<number>(initialCount);
    
    const inc = ()=>setCount((count)=>count+1);

    return (
        <UseStateCountContext.Provider value={[count,inc]}>
            {children}
        </UseStateCountContext.Provider>
    );
}


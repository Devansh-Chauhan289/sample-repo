import { useState } from "react"
import { countModel, initial } from "./models/model"
import { useEffect } from "react"
import { counterIntent } from "./intent/intent"
import { startWith, Subscription,scan } from "rxjs"
import { countView } from "./view/view"



export let CounterApp = () => {
    let [data,setdata] = useState(initial)

    useEffect(()=>{
        let action$ = counterIntent()
        let state$ = action$.pipe(
            scan(countModel,initial),
            startWith(initial)
        )
        
        let res = state$.subscribe(setdata)
        return() => res.unsubscribe()
    },[])
    return countView(data)
}
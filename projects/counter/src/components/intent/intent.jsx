import { filter, fromEvent, switchMap, takeUntil,map,merge,interval } from "rxjs"


export let counterIntent = () => {
    let increment$ = fromEvent(document,"click").pipe(
        filter((e)=> e.target.id === "increment"),
        map(() => ({type : "INCREMENT"}))
    )

    let decrement$ = fromEvent(document,"click").pipe(
        filter((e)=> e.target.id === "decrement"),
        map(() => ({type : "DECREMENT"}))
    )

    let reset$ = fromEvent(document,"click").pipe(
        filter((e)=> e.target.id === "reset"),
        map(() => ({type : "RESET"}))
    )

    let toggle$ = fromEvent(document,"change").pipe(
        filter((e)=> e.target.id === "auto-change"),
        map(()=> ({type : "TOGGLE"}))
    ) 

    let toggleIncrement$ = toggle$.pipe(
        switchMap((toggleIntent) => {
            if(toggleIntent.type === "TOGGLE"){
                return interval(1000).pipe(
                    takeUntil(toggle$),
                    map(()=> ({type : "INCREMENT"}))
                )
            }
        return []
        })
    )
    return merge(increment$,decrement$,reset$,toggle$,toggleIncrement$)
        
}